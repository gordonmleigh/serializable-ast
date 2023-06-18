import ts from 'typescript';

export type TokenDeclaration = Omit<
  ts.InterfaceDeclaration,
  'typeParameters'
> & {
  typeParameters: ts.NodeArray<ts.TypeParameterDeclaration>;
};

export function isTokenDeclaration(node: ts.Node): node is TokenDeclaration {
  return (
    ts.isInterfaceDeclaration(node) &&
    node.name.text.endsWith('Token') &&
    node.typeParameters?.length === 1
  );
}
