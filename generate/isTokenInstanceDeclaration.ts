import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { TokenReference, isTokenReference } from './isTokenReference.js';

export type TokenInstanceDeclaration = ts.TypeAliasDeclaration & {
  type: TokenReference;
};

export function isTokenInstanceDeclaration(
  node: ts.Node,
  defs: DeclarationCollection,
): node is TokenInstanceDeclaration {
  return (
    ts.isTypeAliasDeclaration(node) &&
    ts.isTypeReferenceNode(node.type) &&
    isTokenReference(node.type, defs)
  );
}
