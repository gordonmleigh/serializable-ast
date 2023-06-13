import ts from 'typescript';

export function getSyntaxKind(type: ts.TypeNode): string | undefined {
  return ts.isTypeReferenceNode(type)
    ? getSyntaxKindFromName(type.typeName)
    : undefined;
}

export function getSyntaxKindFromName(name: ts.EntityName): string | undefined {
  if (
    ts.isQualifiedName(name) &&
    ts.isIdentifier(name.left) &&
    name.left.text === 'SyntaxKind'
  ) {
    return name.right.text;
  }
}
