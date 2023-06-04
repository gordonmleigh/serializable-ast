import ts from 'typescript';
import { getName, isValidNodeMember } from './util.js';

export interface Reference {
  kind: 'alias' | 'constraint' | 'generic' | 'heritage' | 'property' | 'union';
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
  const refs = collectConstraintReferences(node);

  for (const member of node.members) {
    // we don't care about other types of members
    if (isValidNodeMember(member)) {
      refs.push(
        ...collectTypeReferences(node.name.text, member.type, 'property'),
      );
    }
  }

  if (node.heritageClauses) {
    for (const clause of node.heritageClauses) {
      for (const type of clause.types) {
        refs.push(...collectTypeReferences(node.name.text, type, 'heritage'));
      }
    }
  }

  return refs;
}

function collectAliasReferences(node: ts.TypeAliasDeclaration): Reference[] {
  return [
    ...collectConstraintReferences(node),
    ...collectTypeReferences(node.name.text, node.type, 'alias'),
  ];
}

function collectConstraintReferences(
  node: ts.TypeAliasDeclaration | ts.InterfaceDeclaration,
): Reference[] {
  const refs: Reference[] = [];

  if (node.typeParameters) {
    for (const param of node.typeParameters) {
      if (param.constraint) {
        refs.push(
          ...collectTypeReferences(
            node.name.text,
            param.constraint,
            'constraint',
          ),
        );
      }
    }
  }

  return refs;
}

function collectTypeReferences(
  source: string,
  target: ts.TypeNode,
  kind: Reference['kind'],
): Reference[] {
  if (ts.isTypeReferenceNode(target)) {
    if (getName(target.typeName) === source) {
      // don't record self refs
      return [];
    }
    const refs: Reference[] = [{ kind, source, target }];
    if (target.typeArguments) {
      refs.push(
        ...target.typeArguments.flatMap((arg) =>
          collectTypeReferences(source, arg, 'generic'),
        ),
      );
    }
    return refs;
  }
  if (
    ts.isExpressionWithTypeArguments(target) &&
    ts.isIdentifier(target.expression)
  ) {
    return [
      {
        kind,
        source,
        target: ts.factory.createTypeReferenceNode(
          target.expression.text,
          target.typeArguments,
        ),
      },
    ];
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
