import ts from 'typescript';

export function getName(name: ts.EntityName): string {
  if (ts.isQualifiedName(name)) {
    return `${getName(name.left)}.${name.right.text}`;
  }
  return name.text;
}

export function getSyntaxKindFromTokenRef(
  token: ts.TypeReferenceNode,
): string | undefined {
  if (
    ts.isTypeReferenceNode(token) &&
    token.typeArguments &&
    token.typeArguments.length === 1
  ) {
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
