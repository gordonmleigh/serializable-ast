import ts from 'typescript';

export function isTokenDeclaration(
  node: ts.Node,
): node is ts.InterfaceDeclaration {
  return (
    ts.isInterfaceDeclaration(node) &&
    node.name.text.endsWith('Token') &&
    node.typeParameters?.length === 1
  );
}
