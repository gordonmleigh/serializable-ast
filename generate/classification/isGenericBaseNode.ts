import ts from 'typescript';
import { DeclarationCollection } from '../util/DeclarationCollection.js';
import { isNode } from './isNode.js';

export type GenericBaseNodeDeclaration = Omit<
  ts.InterfaceDeclaration,
  'typeParameters'
> & {
  typeParameters: ts.NodeArray<
    Omit<ts.TypeParameterDeclaration, 'constraint'> & {
      constraint: ts.TypeReferenceNode;
    }
  >;
};

export function isGenericBaseNode(
  node: ts.Node,
  defs: DeclarationCollection,
): node is GenericBaseNodeDeclaration {
  if (
    !ts.isInterfaceDeclaration(node) ||
    node.typeParameters?.length !== 1 ||
    defs.get(node.name)?.references.length ||
    !isNode(node.name, defs)
  ) {
    return false;
  }
  const param = node.typeParameters[0];
  return !!param.constraint && ts.isTypeReferenceNode(param.constraint);
}
