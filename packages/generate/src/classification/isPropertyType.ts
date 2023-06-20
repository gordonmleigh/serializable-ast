import ts from 'typescript';

export function isPropertyType(node: ts.Node): boolean {
  if (!ts.isTypeNode(node) || !node.parent) {
    return false;
  }
  if (ts.isPropertySignature(node.parent)) {
    return true;
  }
  return (
    ts.isUnionTypeNode(node.parent) &&
    node.parent.parent &&
    ts.isPropertySignature(node.parent.parent)
  );
}
