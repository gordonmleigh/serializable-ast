import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { getName } from './getName.js';
import { getSyntaxKind } from './getSyntaxKind.js';

export function getSyntaxKindsForUnion(
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
    return getSyntaxKindsForRef(node.type, defs);
  } else if (ts.isUnionTypeNode(node.type)) {
    const kinds: string[] = [];
    for (const type of node.type.types) {
      const result = getSyntaxKindsForRef(type, defs);
      if (!result) {
        return undefined;
      }
      kinds.push(...result);
    }
    return kinds;
  }
}

function getSyntaxKindsForRef(
  ref: ts.TypeNode,
  defs: DeclarationCollection,
): string[] | undefined {
  const kind = getSyntaxKind(ref);
  if (kind) {
    return [kind];
  }
  return getSyntaxKindsForUnion(ref, defs);
}
