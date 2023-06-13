import ts from 'typescript';

export type UnionDeclaration = Omit<ts.TypeAliasDeclaration, 'type'> & {
  type: Omit<ts.UnionTypeNode, 'types'> & {
    types: readonly ts.TypeReferenceNode[];
  };
};

export function isUnionDeclaration(node: ts.Node): node is UnionDeclaration {
  return (
    ts.isTypeAliasDeclaration(node) &&
    ts.isUnionTypeNode(node.type) &&
    node.type.types.every((x) => ts.isTypeReferenceNode(x))
  );
}
