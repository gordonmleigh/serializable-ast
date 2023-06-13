import ts from 'typescript';
import { DeclarationCollection } from '../util/DeclarationCollection.js';
import { TokenReference, isTokenReference } from './isTokenReference.js';

export type TokenInstanceDeclaration = Omit<ts.TypeAliasDeclaration, 'type'> & {
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
