import ts from 'typescript';
import { DeclarationCollection } from './DeclarationCollection.js';
import { assert } from './assert.js';
import { getName } from './getName.js';
import { isNode } from './isNode.js';
import { NodeMember, isValidNodeMember } from './isValidNodeMember.js';
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
  } else if (
    ts.isTypeAliasDeclaration(node) &&
    ts.isTypeReferenceNode(node.type)
  ) {
    let refTypeArguments: readonly ts.TypeNode[] | undefined =
      node.type.typeArguments;

    if (typeArguments && refTypeArguments) {
      assert(
        node.typeParameters,
        'expected type parameters for type arguments',
      );
      refTypeArguments = replaceAllGenericTypes(
        refTypeArguments,
        node.typeParameters,
        typeArguments,
      );
    }

    return getNodeMembers(getName(node.type.typeName), defs, refTypeArguments);
  }
}

function getInterfaceMembers(
  node: ts.InterfaceDeclaration,
  defs: DeclarationCollection,
  typeArguments?: readonly ts.TypeNode[],
): NodeMember[] | undefined {
  if (node.typeParameters && !typeArguments) {
    // can't get members of top-level generic
    return;
  }
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

    // // replace refs to tokens
    // memberType = replaceTypes(memberType, (ref) => {
    //   if (!isTokenReference(ref)) {
    //     return ref;
    //   }
    //   const kind = getSyntaxKindFromTokenRef(ref);
    //   if (kind) {
    //     return ts.factory.createTypeReferenceNode(
    //       defs.getToken(kind, ref.typeName),
    //     );
    //   }
    //   const kinds = getSyntaxKindsForUnion(ref, defs);
    //   if (kinds) {
    //     return ts.factory.createUnionTypeNode(
    //       kinds.map((kind) =>
    //         ts.factory.createTypeReferenceNode(
    //           defs.getToken(kind, ref.typeName),
    //         ),
    //       ),
    //     );
    //   }
    //   return ref;
    // });

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
          (m): m is NodeMember =>
            isValidNodeMember(m) &&
            !members.find((x) => x.name.text === m.name.text),
        ),
      );
    }
  }
  return members;
}
