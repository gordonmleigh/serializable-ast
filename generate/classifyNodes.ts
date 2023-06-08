import ts from 'typescript';
import {
  DeclarationCollection,
  TsDeclarationNode,
} from './DeclarationCollection.js';
import { getNodeMembers } from './getNodeMembers.js';
import { getTokenNamesForUnion } from './getTokenNamesForUnion.js';
import { getSyntaxKind } from './util.js';

export function* classifyNodes(
  defs: DeclarationCollection,
): IterableIterator<ts.Statement> {
  for (const [, def] of defs) {
    if (def.node) {
      const result = generateForNodeIsh(def.node, defs);
      if (result) {
        yield result;
      }
    }
  }
}

function generateForNodeIsh(
  node: TsDeclarationNode,
  defs: DeclarationCollection,
): ts.Statement | undefined {
  return generateForNode(node, defs) || generateForTokenUnion(node, defs);
}

function generateForNode(
  node: TsDeclarationNode,
  defs: DeclarationCollection,
): ts.Statement | undefined {
  if (node.typeParameters?.length) {
    return;
  }

  const members = getNodeMembers(node.name, defs);
  if (!members) {
    return;
  }

  const kindPropType = members.find(
    (x) => ts.isIdentifier(x.name) && x.name.text === 'kind',
  )?.type;
  const kind = kindPropType && getSyntaxKind(kindPropType);
  if (!kind) {
    return;
  }

  return ts.addSyntheticLeadingComment(
    ts.factory.createInterfaceDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      node.name,
      undefined,
      undefined,
      members,
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' NodeType',
  );
}

function generateForTokenUnion(
  node: TsDeclarationNode,
  defs: DeclarationCollection,
): ts.Statement | undefined {
  if (!ts.isTypeAliasDeclaration(node) || node.typeParameters?.length) {
    return;
  }
  const tokens = getTokenNamesForUnion(node.type, defs);
  if (!tokens) {
    return;
  }

  let type: ts.TypeNode;

  if (tokens.length === 1) {
    type = ts.factory.createTypeReferenceNode(tokens[0]);
  } else {
    type = ts.factory.createUnionTypeNode(
      tokens.map((token) => ts.factory.createTypeReferenceNode(token)),
    );
  }
  return ts.addSyntheticLeadingComment(
    ts.factory.createTypeAliasDeclaration(
      [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
      node.name,
      undefined,
      type,
    ),
    ts.SyntaxKind.SingleLineCommentTrivia,
    ' TokenUnion',
  );
}

function generateForUnionOfNodes(
  node: TsDeclarationNode,
  defs: DeclarationCollection,
): ts.Statement | undefined {
  if (!ts.isTypeAliasDeclaration(node) || node.typeParameters?.length) {
    return;
  }

  if (ts.isTypeReferenceNode(node.type)) {
    if (node.type.typeArguments?.length) {
      // exclude token defs
      return;
    }
    // union of one
    return ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.SingleLineCommentTrivia,
      ' NodeUnion1',
    );
  }
}
