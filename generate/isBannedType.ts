import ts from 'typescript';
import { getName } from './getName';

const bannedTypeNames = ['__String', 'NodeFlags'];

export function isBannedType(node: ts.TypeNode): boolean {
  if (ts.isTypeReferenceNode(node)) {
    return bannedTypeNames.includes(getName(node.typeName));
  }
  return true;
}
