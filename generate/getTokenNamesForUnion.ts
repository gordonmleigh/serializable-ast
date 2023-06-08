import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { isTokenReference } from './isTokenReference.js';
import { getName, getSyntaxKind } from './util.js';

export function getTokenNamesForUnion(
  ref: string | ts.TypeNode,
  defs: DeclarationCollection,
): string[] | undefined {
  let name: string;
  if (typeof ref === 'string') {
    name = ref;
  } else if (ts.isTypeReferenceNode(ref) && !ref.typeArguments) {
    name = getName(ref.typeName);
  } else {
    return undefined;
  }
  const node = defs.get(name)?.node;
  if (!node || !ts.isTypeAliasDeclaration(node)) {
    return undefined;
  }
  if (ts.isTypeReferenceNode(node.type)) {
    return getTokenNamesForRef(node.type, defs);
  } else if (ts.isUnionTypeNode(node.type)) {
    const kinds: string[] = [];
    for (const type of node.type.types) {
      if (!ts.isTypeReferenceNode(type)) {
        return;
      }
      const result = getTokenNamesForRef(type, defs);
      if (!result) {
        return undefined;
      }
      kinds.push(...result);
    }
    return kinds;
  }
}

function getTokenNamesForRef(
  ref: ts.TypeReferenceNode,
  defs: DeclarationCollection,
): string[] | undefined {
  if (!isTokenReference(ref, defs)) {
    return;
  }
  const kind = getSyntaxKind(ref);
  if (kind) {
    return [defs.getToken(kind, ref.typeName)];
  }
  return getTokenNamesForUnion(ref, defs);
}
