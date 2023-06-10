import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { getSyntaxKind } from './getSyntaxKind.js';
import { isTokenReference } from './isTokenReference.js';

export function getSyntaxKindFromTokenRef(
  token: ts.TypeReferenceNode,
  defs: DeclarationCollection,
): string | undefined {
  if (isTokenReference(token, defs)) {
    return getSyntaxKind(token.typeArguments[0]);
  }
}
