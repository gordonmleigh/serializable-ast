import ts from 'typescript';

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
