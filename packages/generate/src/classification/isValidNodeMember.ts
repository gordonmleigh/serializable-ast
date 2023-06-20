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

const bannedTypeNames = [
  '__String',
  'AmdDependency',
  'FileReference',
  'LanguageVariant',
  'NodeFlags',
  'ResolutionMode',
  'ScriptTarget',
];

function isBannedType(node: ts.TypeNode): boolean {
  if (ts.isTypeReferenceNode(node)) {
    return bannedTypeNames.includes(getName(node.typeName));
  }
  if (ts.isUnionTypeNode(node) || ts.isIntersectionTypeNode(node)) {
    return node.types.some((type) => isBannedType(type));
  }
  if (ts.isTypeOperatorNode(node)) {
    return isBannedType(node.type);
  }
  if (ts.isArrayTypeNode(node)) {
    return isBannedType(node.elementType);
  }
  return false;
}
