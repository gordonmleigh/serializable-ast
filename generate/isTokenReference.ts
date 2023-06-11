import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { getName } from './getName.js';
import { isNode } from './isNode.js';

export type TokenReference = Omit<ts.TypeReferenceNode, 'typeArguments'> & {
  typeArguments: ts.NodeArray<ts.TypeReferenceNode>;
};

export function isTokenReference(
  token: ts.TypeNode,
  defs: DeclarationCollection,
): token is TokenReference {
  return (
    ts.isTypeReferenceNode(token) &&
    getName(token.typeName).endsWith('Token') &&
    token.typeArguments?.length === 1 &&
    ts.isTypeReferenceNode(token.typeArguments[0]) &&
    isNode(token.typeName, defs)
  );
}
