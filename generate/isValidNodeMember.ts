import ts from 'typescript';
import { isBannedType } from './isBannedType';

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
