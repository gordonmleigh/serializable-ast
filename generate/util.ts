import ts from 'typescript';
import { isTokenReference } from './isTokenReference.js';

export function getName(name: ts.EntityName): string {
  if (ts.isQualifiedName(name)) {
    return `${getName(name.left)}.${name.right.text}`;
  }
  return name.text;
}

export function getSyntaxKindFromTokenRef(
  token: ts.TypeReferenceNode,
): string | undefined {
  if (isTokenReference(token)) {
    return getSyntaxKind(token.typeArguments[0]);
  }
}

export function getSyntaxKind(name: ts.TypeNode): string | undefined {
  if (
    ts.isTypeReferenceNode(name) &&
    ts.isQualifiedName(name.typeName) &&
    ts.isIdentifier(name.typeName.left) &&
    name.typeName.left.text === 'SyntaxKind'
  ) {
    return name.typeName.right.text;
  }
}

export function assert(cond: unknown, text?: string): asserts cond {
  if (!cond) {
    throw new Error(`assert failed: ${text}`);
  }
}

export function isDeprecated(node: ts.Node): boolean {
  const jsdoc = ts.getJSDocTags(node);
  return jsdoc.some((x) => x.tagName.text === 'deprecated');
}

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
