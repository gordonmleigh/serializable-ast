import ts from 'typescript';
import { isNode } from '../classification/isNode.js';
import {
  NodeMember,
  isValidNodeMember,
} from '../classification/isValidNodeMember.js';
import { DeclarationCollection } from './DeclarationCollection.js';
import { assert } from './assert.js';
import { getName } from './getName.js';
import { replaceAllGenericTypes, replaceGenericTypes } from './replaceTypes.js';

export function getNodeMembers(
  name: string | ts.EntityName,
  defs: DeclarationCollection,
  typeArguments?: readonly ts.TypeNode[],
): NodeMember[] | undefined {
  if (!isNode(name, defs)) {
    return;
  }
  const node = defs.get(name)?.node;
  assert(node, `expected '${name}' to refer to a node`);

  if (ts.isInterfaceDeclaration(node)) {
    return getInterfaceMembers(node, defs, typeArguments);
  }
  if (!ts.isTypeAliasDeclaration(node)) {
    return;
  }
  if (ts.isTypeReferenceNode(node.type)) {
    return getTokenRefMembers(
      node.type,
      defs,
      node.typeParameters,
      typeArguments,
    );
  }
  if (ts.isIntersectionTypeNode(node.type)) {
    const members: NodeMember[] = [];

    for (const type of node.type.types) {
      if (!ts.isTypeReferenceNode(type)) {
        return;
      }
      const typeMembers = getNodeMembers(
        type.typeName,
        defs,
        type.typeArguments,
      );
      if (!typeMembers) {
        return;
      }
      members.push(
        ...typeMembers.filter(
          (m) => !members.find((x) => x.name.text === m.name.text),
        ),
      );
    }

    return members;
  }
}

function getInterfaceMembers(
  node: ts.InterfaceDeclaration,
  defs: DeclarationCollection,
  typeArguments?: readonly ts.TypeNode[],
): NodeMember[] | undefined {
  const members: NodeMember[] = [];

  for (const member of node.members) {
    if (!isValidNodeMember(member)) {
      continue;
    }
    let memberType = member.type;

    if (typeArguments?.length) {
      assert(
        node.typeParameters,
        'expected type parameters for type arguments',
      );

      if (node.typeParameters && typeArguments) {
        memberType = replaceGenericTypes(
          memberType,
          node.typeParameters,
          typeArguments,
        );
      }
    }

    if (memberType === member.type) {
      members.push(member);
    } else {
      members.push(
        ts.factory.createPropertySignature(
          member.modifiers,
          member.name,
          member.questionToken,
          memberType,
        ) as NodeMember,
      );
    }
  }
  if (!node.heritageClauses) {
    return members;
  }
  for (const clause of node.heritageClauses) {
    for (const type of clause.types) {
      if (!ts.isIdentifier(type.expression)) {
        continue;
      }
      let refTypeArgs: readonly ts.TypeNode[] | undefined = type.typeArguments;
      if (refTypeArgs && typeArguments) {
        assert(
          node.typeParameters,
          'expected type parameters for type arguments',
        );
        refTypeArgs = replaceAllGenericTypes(
          refTypeArgs,
          node.typeParameters,
          typeArguments,
        );
      }
      const baseMembers = getNodeMembers(
        type.expression.text,
        defs,
        refTypeArgs,
      );
      if (!baseMembers) {
        continue;
      }
      members.push(
        ...baseMembers.filter(
          (m) => !members.find((x) => x.name.text === m.name.text),
        ),
      );
    }
  }
  return members;
}

function getTokenRefMembers(
  tokenRef: ts.TypeReferenceNode,
  defs: DeclarationCollection,
  typeParameters: readonly ts.TypeParameterDeclaration[] | undefined,
  typeArguments?: readonly ts.TypeNode[],
) {
  let refTypeArguments: readonly ts.TypeNode[] | undefined =
    tokenRef.typeArguments;

  if (typeArguments && refTypeArguments) {
    assert(typeParameters, 'expected type parameters for type arguments');
    refTypeArguments = replaceAllGenericTypes(
      refTypeArguments,
      typeParameters,
      typeArguments,
    );
  }

  return getNodeMembers(getName(tokenRef.typeName), defs, refTypeArguments);
}
