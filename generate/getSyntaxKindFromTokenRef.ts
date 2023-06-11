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

export function getSyntaxKindsFromTokenRef(
  token: ts.TypeReferenceNode,
  defs: DeclarationCollection,
): string[] | undefined {
  if (isTokenReference(token, defs)) {
    return expandKindUnion(token.typeArguments[0], defs);
  }
}

function expandKindUnion(
  ref: ts.TypeNode,
  defs: DeclarationCollection,
): string[] | undefined {
  if (!ts.isTypeReferenceNode(ref) || ref.typeArguments) {
    return;
  }
  const kind = getSyntaxKind(ref);
  if (kind) {
    return [kind];
  }
  const node = defs.get(ref.typeName)?.node;
  if (
    !node ||
    !ts.isTypeAliasDeclaration(node) ||
    !ts.isUnionTypeNode(node.type)
  ) {
    return;
  }
  const allKinds: string[] = [];
  for (const type of node.type.types) {
    const kinds = expandKindUnion(type, defs);
    if (!kinds) {
      return;
    }
    allKinds.push(...kinds);
  }
  return allKinds;
}
