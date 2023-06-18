import ts from 'typescript';

export function replaceGenericTypes(
  node: ts.TypeNode,
  typeParameters: readonly ts.TypeParameterDeclaration[],
  typeArguments: readonly ts.TypeNode[],
): ts.TypeNode {
  return replaceTypes(node, (ref) => {
    if (!ts.isIdentifier(ref.typeName) || ref.typeArguments?.length) {
      return ref;
    }
    const refName = ref.typeName;
    const paramIndex = typeParameters.findIndex(
      (x) => x.name.text === refName.text,
    );
    if (paramIndex < 0) {
      return ref;
    }
    return typeArguments[paramIndex];
  });
}

export function replaceAllGenericTypes(
  nodes: readonly ts.TypeNode[],
  typeParameters: readonly ts.TypeParameterDeclaration[],
  typeArguments: readonly ts.TypeNode[],
): readonly ts.TypeNode[] {
  const result: ts.TypeNode[] = [];
  let changed = false;
  for (const member of nodes) {
    const replaced = replaceGenericTypes(member, typeParameters, typeArguments);
    if (replaced !== member) {
      changed = true;
    }
    result.push(replaced);
  }
  // keep a constant reference if nothing changed
  if (changed) {
    return result;
  }
  return nodes;
}

export function replaceTypes(
  node: ts.TypeNode,
  replace: (ref: ts.TypeReferenceNode) => ts.TypeNode,
): ts.TypeNode {
  if (ts.isTypeReferenceNode(node)) {
    const typeArgs =
      node.typeArguments && replaceAllTypes(node.typeArguments, replace);
    if (typeArgs === node.typeArguments) {
      return replace(node);
    } else {
      return replace(
        ts.factory.createTypeReferenceNode(node.typeName, typeArgs),
      );
    }
  }
  if (ts.isTypeOperatorNode(node)) {
    const replaced = replaceTypes(node.type, replace);
    return replaced === node.type
      ? node
      : ts.factory.createTypeOperatorNode(node.operator, replaced);
  }
  if (ts.isArrayTypeNode(node)) {
    const replaced = replaceTypes(node.elementType, replace);
    return replaced === node.elementType
      ? node
      : ts.factory.createArrayTypeNode(replaced);
  }
  if (ts.isUnionTypeNode(node)) {
    // keep a constant reference if nothing changed
    const replaced = replaceAllTypes(node.types, replace);
    return replaced === node.types
      ? node
      : ts.factory.createUnionTypeNode(
          node.types.map((member) => replaceTypes(member, replace)),
        );
  }
  if (ts.isIntersectionTypeNode(node)) {
    // keep a constant reference if nothing changed
    const replaced = replaceAllTypes(node.types, replace);
    return replaced === node.types
      ? node
      : ts.factory.createIntersectionTypeNode(
          node.types.map((member) => replaceTypes(member, replace)),
        );
  }
  return node;
}

export function replaceAllTypes(
  nodes: readonly ts.TypeNode[],
  replace: (ref: ts.TypeReferenceNode) => ts.TypeNode,
): readonly ts.TypeNode[] {
  const result: ts.TypeNode[] = [];
  let changed = false;
  for (const member of nodes) {
    const replaced = replaceTypes(member, replace);
    if (replaced !== member) {
      changed = true;
    }
    result.push(replaced);
  }
  // keep a constant reference if nothing changed
  if (changed) {
    return result;
  }
  return nodes;
}
