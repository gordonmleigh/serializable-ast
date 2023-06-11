import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { isNode } from './isNode.js';

export function isReferencedFromNode(
  name: string | ts.EntityName,
  defs: DeclarationCollection,
  path: string[] = [],
): boolean {
  const refs = defs.get(name)?.references;
  if (!refs?.length) {
    return false;
  }
  for (const ref of refs) {
    if (isNode(ref.source, defs)) {
      return true;
    }
    // guard against circular loops
    if (
      !path.includes(ref.source) &&
      isReferencedFromNode(ref.source, defs, [...path, ref.source])
    ) {
      return true;
    }
  }
  return false;
}
