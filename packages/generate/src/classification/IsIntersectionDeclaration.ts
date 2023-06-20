import ts from 'typescript';

export type IntersectionDeclaration = Omit<ts.TypeAliasDeclaration, 'type'> & {
  type: Omit<ts.IntersectionTypeNode, 'types'> & {
    types: readonly ts.TypeReferenceNode[];
  };
};

export function isIntersectionDeclaration(
  node: ts.Node,
): node is IntersectionDeclaration {
  return (
    ts.isTypeAliasDeclaration(node) &&
    ts.isIntersectionTypeNode(node.type) &&
    node.type.types.every((x) => ts.isTypeReferenceNode(x))
  );
}
