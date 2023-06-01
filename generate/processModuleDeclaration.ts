import ts from 'typescript';
import { DefinitionContext, collectDefinitions } from './collectDefinitions.js';
import { assert, getName, getSyntaxKind } from './util.js';

const knownLeaves = ['AssignmentExpression', 'Identifier'];

export function processModuleDeclaration(
  module: ts.ModuleDeclaration,
): ts.SourceFile {
  assert(module.body && ts.isModuleBlock(module.body), 'expected ModuleBlock');

  //const reachableTypes = new Set<string>();
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

  for (const [name, node] of defs.interfaces.entries()) {
    if (defs.isNodeOrBase(name)) {
      const derived =
        !knownLeaves.includes(name) &&
        defs.getReferenceSourceNames(name, 'heritage');
      if (derived) {
        statements.push(
          ts.addSyntheticLeadingComment(
            ts.factory.createTypeAliasDeclaration(
              [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
              name,
              undefined,
              ts.factory.createUnionTypeNode(
                derived.map((iface) =>
                  ts.factory.createTypeReferenceNode(iface),
                ),
              ),
            ),
            ts.SyntaxKind.SingleLineCommentTrivia,
            'Group definition',
          ),
        );
      } else if (!node.some((x) => x.typeParameters)) {
        const members = new Set<string>();
        const interfaces = defs.interfaces.get(name);
        assert(interfaces, `expected '${name}' to refer to an interface`);

        statements.push(
          ts.addSyntheticLeadingComment(
            ts.factory.createInterfaceDeclaration(
              [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
              name,
              undefined,
              undefined,
              interfaces.flatMap((x) => getMembers(x, defs, members)),
            ),
            ts.SyntaxKind.SingleLineCommentTrivia,
            'Node definition',
          ),
        );
      }
    } else if (defs.getReferencingNodeNames(name).length) {
      if (node.length > 1) {
        throw new Error(`type ${name} has multiple definitions`);
      }
      statements.push(
        ts.addSyntheticLeadingComment(
          ts.factory.createInterfaceDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
            name,
            node[0].typeParameters,
            node[0].heritageClauses,
            node[0].members,
          ),
          ts.SyntaxKind.SingleLineCommentTrivia,
          'Non-node definition',
        ),
      );
    } else {
      console.log(`unclassified: ${name}`);
    }
  }
  for (const [name, node] of defs.typeAliases.entries()) {
    if (defs.isGenericNodeInstantiation(node)) {
      const interfaces = defs.interfaces.get(getName(node.type.typeName));
      assert(interfaces, 'expected to find the interfaces');
      const members = new Set<string>();

      statements.push(
        ts.addSyntheticLeadingComment(
          ts.factory.createInterfaceDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
            name,
            undefined,
            undefined,
            interfaces.flatMap((x) =>
              getMembers(x, defs, members, node.type.typeArguments),
            ),
          ),
          ts.SyntaxKind.SingleLineCommentTrivia,
          'Generic node instance',
        ),
      );
    } else if (defs.isUnionOfNodesOrBases(name)) {
      assert(!node.typeParameters, 'expected no type parameters');
      statements.push(
        ts.addSyntheticLeadingComment(
          ts.factory.createTypeAliasDeclaration(
            [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
            name,
            undefined,
            node.type,
          ),
          ts.SyntaxKind.SingleLineCommentTrivia,
          'Pre-defined union',
        ),
      );
    } else {
      console.log(`unclassified: ${name}`);
    }
  }
  // for (const [base, instances] of defs.genericNodeInstantiations) {
  //   statements.push(
  //     ts.factory.createTypeAliasDeclaration(
  //       [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
  //       base,
  //       undefined,
  //       ts.factory.createUnionTypeNode(
  //         instances.map((instance) =>
  //           ts.factory.createTypeReferenceNode(instance.nodeName),
  //         ),
  //       ),
  //     ),
  //   );
  // }

  return ts.factory.createSourceFile(
    statements,
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  );
}

function getMembers(
  node: ts.InterfaceDeclaration,
  defs: DefinitionContext,
  seen: Set<string>,
  typeArguments?: readonly ts.TypeNode[],
): ts.TypeElement[] {
  const members: ts.TypeElement[] = [];

  for (const member of node.members) {
    if (!isValidNodeMember(member) || seen.has(member.name.text)) {
      continue;
    }
    seen.add(member.name.text);
    const translated = translateMember(node, member, typeArguments);
    if (translated) {
      members.push(translated);
    }
  }
  if (node.heritageClauses) {
    for (const clause of node.heritageClauses) {
      for (const type of clause.types) {
        assert(ts.isIdentifier(type.expression), 'expected identifier');
        const parents = defs.interfaces.get(type.expression.text);
        if (parents) {
          for (const parent of parents) {
            members.push(...getMembers(parent, defs, seen, typeArguments));
          }
        }
      }
    }
  }

  return members;
}

type NodeMember = ts.PropertySignature & { name: ts.Identifier };

function isValidNodeMember(node: ts.TypeElement): node is NodeMember {
  return (
    ts.isPropertySignature(node) &&
    ts.isIdentifier(node.name) &&
    !node.name.text.startsWith('_') &&
    node.name.text !== 'parent'
  );
}

function translateMember(
  parent: ts.InterfaceDeclaration,
  node: ts.TypeElement,
  typeArguments?: readonly ts.TypeNode[],
): ts.TypeElement | undefined {
  if (!isValidNodeMember(node)) {
    return;
  }
  const nodeType =
    typeArguments && node.type
      ? replaceTypeParams(parent, node.type, typeArguments)
      : node.type;

  if (node.name.text === 'kind' && nodeType) {
    const kind = getSyntaxKind(nodeType);
    if (kind) {
      return ts.factory.createPropertySignature(
        node.modifiers,
        node.name,
        node.questionToken,
        ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(kind)),
      );
    }
  }
  if (node.type && !isBannedType(node.type)) {
    return node;
  }
}

function replaceTypeParams(
  parent: ts.InterfaceDeclaration,
  type: ts.TypeNode,
  typeArguments: readonly ts.TypeNode[],
): ts.TypeNode {
  if (
    ts.isTypeReferenceNode(type) &&
    ts.isIdentifier(type.typeName) &&
    parent.typeParameters
  ) {
    const typeName = type.typeName.text;
    const index = parent.typeParameters.findIndex(
      (x) => x.name.text === typeName,
    );
    if (index >= 0 && index < typeArguments.length) {
      return typeArguments[index];
    }
  }
  return type;
}

const bannedTypeNames = ['__String', 'NodeFlags', 'SyntaxKind'];

function isBannedType(node: ts.TypeNode): boolean {
  if (ts.isTypeReferenceNode(node)) {
    return bannedTypeNames.includes(getName(node.typeName));
  }
  return true;
}
