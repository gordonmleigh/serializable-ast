import ts from 'typescript';
import { DeclarationCollection } from '../util/DeclarationCollection.js';
import { getName } from '../util/getName.js';
import { isNode } from './isNode.js';

export function isUnionOfNodes(
  name: string | ts.EntityName,
  defs: DeclarationCollection,
): boolean {
  const nameString = typeof name === 'string' ? name : getName(name);
  if (nameString === 'Node') {
    return true;
  }
  const node = defs.get(nameString)?.node;
  return (
    !!node &&
    ts.isTypeAliasDeclaration(node) &&
    !node.typeParameters?.length &&
    ts.isUnionTypeNode(node.type) &&
    node.type.types.every(
      (member) =>
        ts.isTypeReferenceNode(member) &&
        (isNode(member.typeName, defs) ||
          isUnionOfNodes(member.typeName, defs)),
    )
  );
}
