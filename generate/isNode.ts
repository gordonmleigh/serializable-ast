import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { getName } from './getName.js';

export function isNode(
  name: string | ts.EntityName,
  defs: DeclarationCollection,
): boolean {
  const nameString = typeof name === 'string' ? name : getName(name);
  if (nameString === 'Node') {
    return true;
  }
  const def = defs.get(nameString)?.node;
  if (!def) {
    return false;
  }
  if (ts.isInterfaceDeclaration(def)) {
    if (def.heritageClauses) {
      return def.heritageClauses
        .flatMap((clause) => clause.types)
        .some(
          (base) =>
            ts.isIdentifier(base.expression) &&
            isNode(base.expression.text, defs),
        );
    }
  } else if (ts.isTypeAliasDeclaration(def)) {
    if (ts.isTypeReferenceNode(def.type)) {
      return isNode(def.type.typeName, defs);
    }
  }
  return false;
}
