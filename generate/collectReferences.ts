import ts from 'typescript';

export interface Reference {
  kind: 'alias' | 'heritage' | 'property' | 'union';
  source: string;
  target: ts.TypeReferenceNode;
}

export function collectReferences(node: ts.Node): Reference[] {
  if (ts.isInterfaceDeclaration(node)) {
    return collectInterfaceReferences(node);
  } else if (ts.isTypeAliasDeclaration(node)) {
    return collectAliasReferences(node);
  }
  return [];
}

function collectInterfaceReferences(
  node: ts.InterfaceDeclaration,
): Reference[] {
  const refs: Reference[] = [];

  for (const member of node.members) {
    // we don't care about other types of members
    if (ts.isPropertyDeclaration(member) && member.type) {
      refs.push(
        ...collectTypeReferences(node.name.text, member.type, 'property'),
      );
    }
  }

  if (!node.heritageClauses) {
    return refs;
  }

  for (const clause of node.heritageClauses) {
    for (const type of clause.types) {
      refs.push(...collectTypeReferences(node.name.text, type, 'heritage'));
    }
  }

  return refs;
}

function collectAliasReferences(node: ts.TypeAliasDeclaration): Reference[] {
  return collectTypeReferences(node.name.text, node.type, 'alias');
}

function collectTypeReferences(
  source: string,
  target: ts.TypeNode,
  kind: Reference['kind'],
): Reference[] {
  if (ts.isTypeReferenceNode(target)) {
    return [{ kind, source, target }];
  }
  if (ts.isUnionTypeNode(target)) {
    return target.types.flatMap((type) =>
      collectTypeReferences(source, type, kind === 'alias' ? 'union' : kind),
    );
  }
  if (ts.isIntersectionTypeNode(target)) {
    return target.types.flatMap((type) =>
      collectTypeReferences(source, type, kind),
    );
  }
  return [];
}
