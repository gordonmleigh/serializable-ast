import ts from 'typescript';

export type SimpleAliasDeclaration = Omit<ts.TypeAliasDeclaration, 'type'> & {
  type: ts.TypeReferenceNode;
};

export function isSimpleAliasDeclaration(
  node: ts.Node,
): node is SimpleAliasDeclaration {
  return ts.isTypeAliasDeclaration(node) && ts.isTypeReferenceNode(node.type);
}
