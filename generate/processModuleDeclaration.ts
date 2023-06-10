import ts from 'typescript';
import {
  DeclarationCollection,
  Reference,
  isDeclarationNode,
} from './DeclarationCollection.js';
import { assert } from './assert.js';
import { getNodeKind } from './getNodeKind.js';
import { getNodeMembers } from './getNodeMembers.js';
import { getSyntaxKind } from './getSyntaxKind.js';
import { getSyntaxKindFromTokenRef } from './getSyntaxKindFromTokenRef.js';
import { isNode } from './isNode.js';
import { isTokenDeclaration } from './isTokenDeclaration.js';
import { isUnionOfNodes } from './isUnionOfNodes.js';
import { NodeMember } from './isValidNodeMember.js';
import { replaceTypes } from './replaceTypes.js';

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

  const tokensByKind = new Map<string, string>();

  // search for tokens
  for (const node of defs.declarations()) {
    if (ts.isTypeAliasDeclaration(node) && ts.isTypeReferenceNode(node.type)) {
      const kind = getSyntaxKindFromTokenRef(node.type, defs);
      if (kind) {
        assert(!tokensByKind.has(kind), 'duplicate token definition');
        tokensByKind.set(kind, node.name.text);
      }
    }
  }

  for (const node of defs.declarations()) {
    const members = getNodeMembers(node.name, defs);
    const kind = members ? getNodeKind(members) : undefined;

    if (members && kind && !node.typeParameters) {
      statements.push(
        makeNodeDefinition(node.name.text, members, defs, tokensByKind),
      );
    } else if (isTokenDeclaration(node)) {
      const refs = defs.getReferences(node.name, 'generic');
      if (refs.length) {
        statements.push(makeTokenGroupDefinition(node.name, refs));
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
    // if (
    //   ts.isTypeReferenceNode(member.type) &&
    //   getName(member.type.typeName).match(/^SyntaxKind(\.|$)/)
    // ) {
    //   continue;
    // }
    type = replaceTypes(type, (ref) => {
      const tokenKind = getSyntaxKindFromTokenRef(ref, defs);
      if (tokenKind) {
        const token = tokens.get(tokenKind);
        if (token) {
          return ts.factory.createTypeReferenceNode(token);
        }
      }
      const kind = getSyntaxKind(ref);
      if (kind) {
        return ts.factory.createLiteralTypeNode(
          ts.factory.createStringLiteral(kind),
        );
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
  refs: Reference[],
): ts.Statement {
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      name,
      undefined,
      ts.factory.createUnionTypeNode(
        refs.map((ref) => ts.factory.createTypeReferenceNode(ref.source)),
      ),
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' NodeGroup',
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
