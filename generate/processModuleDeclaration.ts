import ts, { TypeAliasDeclaration } from 'typescript';
import {
  DeclarationCollection,
  Reference,
  isDeclarationNode,
} from './DeclarationCollection.js';
import { assert } from './assert.js';
import { getName } from './getName.js';
import { getNodeKind } from './getNodeKind.js';
import { getNodeMembers } from './getNodeMembers.js';
import { getSyntaxKind, getSyntaxKindFromName } from './getSyntaxKind.js';
import { isGenericBaseNode } from './isGenericBaseNode.js';
import { isNode } from './isNode.js';
import { isReferencedFromNode } from './isReferencedFromNode.js';
import {
  isSyntaxKindUnion,
  isSyntaxKindUnionName,
  isSyntaxKindUnionRef,
} from './isSyntaxKindUnion.js';
import { isTokenDeclaration } from './isTokenDeclaration.js';
import {
  TokenInstanceDeclaration,
  isTokenInstanceDeclaration,
} from './isTokenInstanceDeclaration.js';
import { TokenReference, isTokenReference } from './isTokenReference.js';
import { isUnionDeclaration } from './isUnionDeclaration.js';
import { isUnionOfNodes } from './isUnionOfNodes.js';
import { NodeMember } from './isValidNodeMember.js';
import { replaceTypes } from './replaceTypes.js';

type TokenInstanceRef = {
  typeName: ts.EntityName;
  typeArgument: ts.EntityName;
};

type TokenDeclaration = {
  node: ts.InterfaceDeclaration;
  references: (Omit<Reference, 'target'> & { target: TokenReference })[];
};

export function processModuleDeclaration(
  module: ts.ModuleDeclaration,
): ts.SourceFile {
  assert(module.body && ts.isModuleBlock(module.body), 'expected ModuleBlock');
  const defs = new DeclarationCollection();
  const statements: ts.Statement[] = [];

  for (const statement of module.body.statements) {
    if (isDeclarationNode(statement) && !isBlockedType(statement.name)) {
      defs.add(statement);
    }
  }

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

  const tokenTypes = [...defs].filter(
    (ref): ref is TokenDeclaration =>
      !!ref.node && isTokenDeclaration(ref.node),
  );

  const kindToTokenName = new Map<string, string>();
  const kindToTokenBase = new Map<string, TokenInstanceRef>();

  const allRefs = tokenTypes
    .flatMap((def) => def.references)
    .map((ref) => ({
      kind: ref.kind,
      source: ref.source,
      typeName: ref.target.typeName,
      typeArgument: ref.target.typeArguments[0].typeName,
    }));

  for (let i = 0; i < allRefs.length; ++i) {
    const ref = allRefs[i];
    const typeArgName = getName(ref.typeArgument);
    if (kindToTokenName.has(typeArgName)) {
      continue;
    }
    if (
      getSyntaxKindFromName(ref.typeArgument) ||
      isSyntaxKindUnionName(ref.typeArgument, defs)
    ) {
    }
    if (ref.kind === 'alias') {
      // this is the name of the specific token node type
      kindToTokenName.set(typeArgName, ref.source);
      // we have a specific token node type, don't need the base
      kindToTokenBase.delete(typeArgName);
    } else if (ref.kind === 'generic-instance') {
      // save the token base type for the kind for later
      kindToTokenBase.set(typeArgName, ref);
    } else if (ref.kind === 'heritage') {
      const parent = defs.get(ref.source)?.node;
      assert(parent && ts.isInterfaceDeclaration(parent));

      const param = parent.typeParameters?.find(
        (param) => param.name.text === typeArgName,
      );
      if (param?.constraint) {
        if (isSyntaxKindUnionRef(param.constraint, defs)) {
          allRefs.push({
            kind: 'generic-instance',
            source: ref.source,
            typeName: ref.typeName,
            typeArgument: param.constraint.typeName,
          });
        }
      }
      if (param?.default) {
        if (isSyntaxKindUnionRef(param.default, defs)) {
          allRefs.push({
            kind: 'generic-instance',
            source: ref.source,
            typeName: ref.typeName,
            typeArgument: param.default.typeName,
          });
        }
      }
    }
    if (isSyntaxKindUnionName(ref.typeArgument, defs)) {
      const kinds = getNamesOfSyntaxKindUnionDeep(ref.typeArgument, defs);
      for (const childKind of kinds) {
        if (typeArgName === getName(childKind)) {
          continue;
        }
        allRefs.push({
          kind: 'generic-instance',
          source: ref.source,
          typeName: ref.typeName,
          typeArgument: childKind,
        });
      }
    }
  }

  // now contains only referenced tokens with no specific node type
  for (const [kind, tokenBase] of kindToTokenBase) {
    let nodeName: string;
    if (ts.isQualifiedName(tokenBase.typeArgument)) {
      assert(
        ts.isIdentifier(tokenBase.typeArgument.left) &&
          tokenBase.typeArgument.left.text === 'SyntaxKind',
        'expected SyntaxKind ref',
      );
      nodeName = tokenBase.typeArgument.right.text + 'Token';
    } else {
      assert(ts.isIdentifier(tokenBase.typeArgument), 'expected identifier');
      nodeName = tokenBase.typeArgument.text + 'Token';
    }
    if (defs.get(nodeName)?.node) {
      console.warn(`Token node type ${nodeName} already exists`);
    } else {
      // now generate a definition for the token node type
      kindToTokenName.set(kind, nodeName);
      defs.add(
        ts.factory.createTypeAliasDeclaration(
          undefined,
          nodeName,
          undefined,
          ts.factory.createTypeReferenceNode(tokenBase.typeName, [
            ts.factory.createTypeReferenceNode(tokenBase.typeArgument),
          ]),
        ),
      );
    }
  }

  for (const node of defs.declarations()) {
    const members = getNodeMembers(node.name, defs);
    const kind = members ? getNodeKind(members) : undefined;

    if (isGenericBaseNode(node, defs)) {
      const constraint = node.typeParameters[0].constraint;
      if (ts.isTypeReferenceNode(constraint)) {
        const names = getAllNames(constraint.typeName, defs);
        const tokens = names.map((x) => kindToTokenName.get(getName(x)));
        if (!tokens.some((x) => !x)) {
          statements.push(
            makeTokenGroupDefinition(node.name, tokens as string[]),
          );
        }
      }
    } else if (members && kind && !node.typeParameters) {
      statements.push(
        makeNodeDefinition(node.name.text, members, defs, kindToTokenName),
      );
    } else if (isTokenInstanceDeclaration(node, defs)) {
      statements.push(
        makeTokenInstanceDeclaration(node, defs, kindToTokenName),
      );
    } else if (isTokenDeclaration(node)) {
      const refs = defs.getReferences(node.name, 'alias', 'heritage');
      if (refs.length) {
        statements.push(
          makeTokenGroupDefinition(
            node.name,
            refs.map((ref) => ref.source),
          ),
        );
      }
    } else if (isNode(node.name, defs)) {
      // probably a base node
      const children = defs
        .getReferences(node.name, 'heritage')
        .map((x) => x.source);
      if (children.length) {
        statements.push(makeNodeGroupDefinition(node.name, children));
      }
    } else if (isUnionOfNodes(node.name, defs)) {
      assert(ts.isTypeAliasDeclaration(node));
      statements.push(makeNodeUnionDefinition(node));
    } else if (isSyntaxKindUnion(node, defs)) {
      if (isReferencedFromNode(node.name, defs)) {
        statements.push(makeSyntaxKindUnionDefinition(node, defs));
      }
    }
  }

  return ts.factory.createSourceFile(
    statements,
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  );
}

function makeNodeDefinition(
  name: string,
  members: NodeMember[],
  defs: DeclarationCollection,
  tokens: Map<string, string>,
): ts.Statement {
  const processedMembers: ts.PropertySignature[] = [];

  for (const member of members) {
    let type = member.type;
    if (member.name.text === 'kind') {
      const kind = getSyntaxKind(type);
      assert(kind, 'expected a leaf node with definite kind');
      type = ts.factory.createLiteralTypeNode(
        ts.factory.createStringLiteral(kind),
      );
    }
    type = replaceTypes(type, (ref) => {
      if (isTokenReference(ref, defs)) {
        const kind = getName(ref.typeArguments[0].typeName);
        const token = tokens.get(kind);
        assert(token, `expected token for ${kind}`);
        return ts.factory.createTypeReferenceNode(token);
      }
      if (ref.parent && ts.isPropertySignature(ref.parent)) {
        const kind = getSyntaxKind(ref);
        if (kind) {
          return ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(kind),
          );
        }
      }
      return ref;
    });
    processedMembers.push(
      ts.factory.createPropertySignature(
        member.modifiers,
        member.name,
        member.questionToken,
        type,
      ),
    );
  }

  return ts.addSyntheticLeadingComment(
    ts.factory.createInterfaceDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      name,
      undefined,
      undefined,
      processedMembers,
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' NodeType',
  );
}

function makeNodeGroupDefinition(
  name: ts.Identifier,
  members: string[],
): ts.Statement {
  let type: ts.TypeNode;
  if (members.length === 1) {
    type = ts.factory.createTypeReferenceNode(members[0]);
  } else {
    type = ts.factory.createUnionTypeNode(
      members.map((member) => ts.factory.createTypeReferenceNode(member)),
    );
  }
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      name,
      undefined,
      type,
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' NodeGroup',
  );
}

function makeTokenGroupDefinition(
  name: ts.Identifier,
  refs: (ts.EntityName | string)[],
): ts.Statement {
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      name,
      undefined,
      ts.factory.createUnionTypeNode(
        refs.map((ref) => ts.factory.createTypeReferenceNode(ref)),
      ),
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' TokenGroup',
  );
}

function makeNodeUnionDefinition(node: ts.TypeAliasDeclaration): ts.Statement {
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      node.name,
      undefined,
      node.type,
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' NodeUnion',
  );
}

function makeSyntaxKindUnionDefinition(
  node: TypeAliasDeclaration,
  defs: DeclarationCollection,
): ts.Statement {
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      node.name,
      undefined,
      ts.factory.createUnionTypeNode(
        getAllNames(node.name, defs).map((name) => {
          if (
            ts.isQualifiedName(name) &&
            ts.isIdentifier(name.left) &&
            name.left.text === 'SyntaxKind'
          ) {
            return ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral(name.right.text),
            );
          }
          return ts.factory.createTypeReferenceNode(name);
        }),
      ),
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' SyntaxKindUnion',
  );
}

function makeTokenInstanceDeclaration(
  node: TokenInstanceDeclaration,
  defs: DeclarationCollection,
  kindToTokenName: Map<string, string>,
): ts.Statement {
  const members = getAllNames(node.type.typeArguments[0].typeName, defs);
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      node.name,
      undefined,
      ts.factory.createUnionTypeNode(
        members.map((member) => {
          const memberName = getName(member);
          const token = kindToTokenName.get(memberName);
          assert(token, `expected token for ${memberName}`);
          return ts.factory.createTypeReferenceNode(token);
        }),
      ),
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' TokenInstance',
  );
}

function getNamesOfSyntaxKindUnionDeep(
  name: ts.EntityName,
  defs: DeclarationCollection,
): ts.EntityName[] {
  const node = defs.get(name)?.node;
  if (node && isUnionDeclaration(node)) {
    const all = node.type.types.flatMap((x) =>
      getNamesOfSyntaxKindUnionDeep(x.typeName, defs),
    );
    all.push(name);
    return all;
  }
  return [name];
}

function getAllNames(
  name: ts.EntityName,
  defs: DeclarationCollection,
): ts.EntityName[] {
  const node = defs.get(name)?.node;
  if (node && isUnionDeclaration(node)) {
    return node.type.types.flatMap((x) => x.typeName);
  }
  return [name];
}

const blockedTypes = [
  'Bundle',
  'NodeArray',
  'SourceFile',
  'SyntheticExpression',
  'TransientIdentifier',
];

function isBlockedType(name: ts.Identifier): boolean {
  return blockedTypes.includes(name.text);
}
