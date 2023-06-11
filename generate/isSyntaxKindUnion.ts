import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { getSyntaxKind } from './getSyntaxKind.js';
import { UnionDeclaration, isUnionDeclaration } from './isUnionDeclaration.js';

export function isSyntaxKindUnionDeclaration(
  node: ts.Node,
  defs: DeclarationCollection,
): node is UnionDeclaration {
  if (!isUnionDeclaration(node)) {
    console.debug(
      `isSyntaxKindUnionDeclaration(${(node as any)?.name?.text})`,
      ts.SyntaxKind[node.kind],
    );
    return false;
  }
  for (const type of node.type.types) {
    if (!getSyntaxKind(type) && !isSyntaxKindUnionRef(type, defs)) {
      console.debug(
        `isSyntaxKindUnionDeclaration(${node.name.text}) [${
          (type as any)?.typeName?.text
        }]`,
      );
      return false;
    }
  }
  return true;
}

export function isSyntaxKindUnionRef(
  node: ts.Node,
  defs: DeclarationCollection,
): node is ts.TypeReferenceNode {
  return (
    ts.isTypeReferenceNode(node) && isSyntaxKindUnionName(node.typeName, defs)
  );
}

export function isSyntaxKindUnionName(
  node: ts.EntityName,
  defs: DeclarationCollection,
): boolean {
  const ref = defs.get(node)?.node;
  return !!ref && isSyntaxKindUnionDeclaration(ref, defs);
}

// export function isSyntaxKindUnionDeclaration(
//   node: ts.Node,
//   defs: DeclarationCollection,
// ): node is UnionDeclaration {
//   return (
//     isUnionDeclaration(node) &&
//     node.type.types.every(
//       (type) => !!getSyntaxKind(type) || isSyntaxKindUnionRef(type, defs),
//     )
//   );
// }

// export function isSyntaxKindUnionRef(
//   node: ts.Node,
//   defs: DeclarationCollection,
// ): node is ts.TypeReferenceNode {
//   return (
//     ts.isTypeReferenceNode(node) && isSyntaxKindUnionName(node.typeName, defs)
//   );
// }

// export function isSyntaxKindUnionName(
//   node: ts.EntityName,
//   defs: DeclarationCollection,
// ): boolean {
//   const ref = defs.get(node)?.node;
//   return !!ref && isSyntaxKindUnionDeclaration(ref, defs);
// }
