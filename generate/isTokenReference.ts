import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { isNode } from './isNode.js';
import { getName } from './util.js';

export function isTokenReference(
  token: ts.TypeReferenceNode,
  defs: DeclarationCollection,
): token is ts.TypeReferenceNode & { typeArguments: readonly ts.TypeNode[] } {
  return (
    ts.isTypeReferenceNode(token) &&
    getName(token.typeName).endsWith('Token') &&
    token.typeArguments?.length === 1 &&
    isNode(token.typeName, defs)
  );
}
