import ts from 'typescript';
import { getName } from '../util/getName.js';

export type NodeMember = ts.PropertySignature & {
  name: ts.Identifier;
  type: ts.TypeNode;
};

export function isValidNodeMember(node: ts.TypeElement): node is NodeMember {
  return (
    ts.isPropertySignature(node) &&
    ts.isIdentifier(node.name) &&
    !node.name.text.startsWith('_') &&
    node.name.text !== 'parent' &&
    (!node.type || !isBannedType(node.type))
  );
}

const bannedTypeNames = ['__String', 'NodeFlags'];

function isBannedType(node: ts.TypeNode): boolean {
  if (ts.isTypeReferenceNode(node)) {
    return bannedTypeNames.includes(getName(node.typeName));
  }
  return true;
}
