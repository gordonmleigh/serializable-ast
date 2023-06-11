import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { getSyntaxKind } from './getSyntaxKind.js';
import { UnionDeclaration, isUnionDeclaration } from './isUnionDeclaration.js';

export function isSyntaxKindUnion(
  node: ts.Node,
  defs: DeclarationCollection,
): node is UnionDeclaration {
  return (
    isUnionDeclaration(node) &&
    node.type.types.every(
      (type) => !!getSyntaxKind(type) || isSyntaxKindUnion(type, defs),
    )
  );
}

export function isSyntaxKindUnionRef(
  node: ts.Node,
  defs: DeclarationCollection,
): node is ts.TypeReferenceNode {
  return (
    ts.isTypeReferenceNode(node) && isSyntaxKindUnionName(node.typeName, defs)
  );
}

export function isSyntaxKindUnionName(
  node: ts.EntityName,
  defs: DeclarationCollection,
): boolean {
  const ref = defs.get(node)?.node;
  return !!ref && isSyntaxKindUnion(ref, defs);
}
