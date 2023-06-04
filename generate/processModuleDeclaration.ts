import ts from 'typescript';
import { collectDefinitions } from './collectDefinitions.js';
import { assert, getName, getSyntaxKind, isValidNodeMember } from './util.js';

export function processModuleDeclaration(
  module: ts.ModuleDeclaration,
): ts.SourceFile {
  assert(module.body && ts.isModuleBlock(module.body), 'expected ModuleBlock');

  const statements: ts.Statement[] = [];
  const defs = collectDefinitions(module.body);

  // output a definition for NodeArray<T>
  statements.push(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      'NodeArray',
      [ts.factory.createTypeParameterDeclaration(undefined, 'T', undefined)],
      ts.factory.createTypeOperatorNode(
        ts.SyntaxKind.ReadonlyKeyword,
        ts.factory.createArrayTypeNode(ts.factory.createTypeReferenceNode('T')),
      ),
    ),
  );

  for (const [name, refs] of defs.referencesByTarget) {
    if (!/^SyntaxKind(\.|$)/.test(name)) {
      continue;
    }
    console.log(
      name,
      refs.map(({ kind, source, target }) => ({
        kind,
        source,
        target: {
          typeName: getName(target.typeName),
          typeArguments: target.typeArguments?.map((arg) => arg.getText()),
        },
      })),
    );
  }

  for (const [name, node] of defs.types) {
    const type = defs.getTypeClass(name);

    switch (type) {
      case 'ExtendedNode':
      case 'NodeType':
        const members = defs
          .getNodeMembers(name)
          ?.map((member) => {
            if (!isValidNodeMember(member)) {
              return undefined;
            }
            if (member.name.text === 'kind') {
              const kind = getSyntaxKind(member.type);
              if (kind) {
                return ts.factory.createPropertySignature(
                  member.modifiers,
                  member.name,
                  member.questionToken,
                  ts.factory.createLiteralTypeNode(
                    ts.factory.createStringLiteral(kind),
                  ),
                );
              }
            } else if (ts.isTypeReferenceNode(member.type)) {
              // remove any props that use SyntaxKind which aren't `kind`
              if (/^SyntaxKind(\.|$)/.test(getName(member.type.typeName))) {
                return undefined;
              }
            }
            return member;
          })
          .filter((x): x is ts.PropertySignature => !!x);

        assert(members, 'expected node to have members');

        statements.push(
          ts.addSyntheticLeadingComment(
            ts.factory.createInterfaceDeclaration(
              [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
              name,
              undefined,
              undefined,
              members,
            ),
            ts.SyntaxKind.SingleLineCommentTrivia,
            ` ${type}`,
          ),
        );
        break;

      case 'NodeBrand':
      case 'NodeGroup':
        const derived = defs
          .getReferenceSourceNames(name, ['alias', 'heritage'])
          .filter((ref) => defs.isNode(ref));

        if (!derived.length) {
          continue;
        }

        statements.push(
          ts.addSyntheticLeadingComment(
            ts.factory.createTypeAliasDeclaration(
              [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
              name,
              undefined,
              ts.factory.createUnionTypeNode(
                derived.map((ref) => ts.factory.createTypeReferenceNode(ref)),
              ),
            ),
            ts.SyntaxKind.SingleLineCommentTrivia,
            ` ${type}`,
          ),
        );
        break;

      case 'NodeUnion':
        //case 'ReferencedNonNode':
        if (ts.isInterfaceDeclaration(node)) {
          statements.push(
            ts.addSyntheticLeadingComment(
              ts.factory.createInterfaceDeclaration(
                [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
                node.name,
                node.typeParameters,
                node.heritageClauses,
                node.members,
              ),
              ts.SyntaxKind.SingleLineCommentTrivia,
              ` ${type} interface`,
            ),
          );
        } else if (ts.isTypeAliasDeclaration(node)) {
          statements.push(
            ts.addSyntheticLeadingComment(
              ts.factory.createTypeAliasDeclaration(
                [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
                node.name,
                node.typeParameters,
                node.type,
              ),
              ts.SyntaxKind.SingleLineCommentTrivia,
              ` ${type} interface`,
            ),
          );
        } else {
          throw new Error(`unknown ${type} ${name}`);
        }
        break;

      default:
        console.log(`${type.padEnd(20)} ${name}`);
        break;
    }
  }

  return ts.factory.createSourceFile(
    statements,
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  );
}
