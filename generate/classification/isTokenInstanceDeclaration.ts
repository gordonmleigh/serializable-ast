import ts from 'typescript';
import { DeclarationCollection } from '../util/DeclarationCollection.js';
import {
  IntersectionDeclaration,
  isIntersectionDeclaration,
} from './IsIntersectionDeclaration.js';
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

export function isTokenInstanceIntersectionDeclaration(
  node: ts.Node,
  defs: DeclarationCollection,
): node is IntersectionDeclaration {
  return (
    isIntersectionDeclaration(node) &&
    node.type.types.some((type) => isTokenReference(type, defs))
  );
}
