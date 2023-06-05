import ts from 'typescript';
import {
  ReferenceCollection,
  ReferenceKind,
  getReferenceSourceName,
} from './ReferenceCollection.js';
import {
  NodeMember,
  assert,
  getName,
  getSyntaxKind,
  isDeprecated,
  isValidNodeMember,
} from './util.js';

const blockedTypes = [
  'Bundle',
  'NodeArray',
  'SourceFile',
  'SyntheticExpression',
  'TransientIdentifier',
];

type Declaration = ts.InterfaceDeclaration | ts.TypeAliasDeclaration;
type Type = Declaration | ts.TypeReferenceNode;

export type TypeClassification =
  | 'ExtendedNode'
  | 'NodeBrand'
  | 'NodeGroup'
  | 'NodeType'
  | 'NodeUnion'
  | 'ReferencedNonNode'
  | 'UnreferencedNonNode';

export class DefinitionContext {
  public readonly brands = new Set<string>();
  public readonly references = new ReferenceCollection();
  public readonly tokens = new Map<string, string>();
  public readonly types = new Map<string, Declaration>();

  private addToken(kind: string, token: string): void {
    assert(!this.tokens.has(kind), `duplicate token ${kind}`);
    this.tokens.set(kind, token);
  }

  public addType(node: Declaration): void {
    if (
      blockedTypes.includes(node.name.text) ||
      node.name.text.startsWith('Has') ||
      isDeprecated(node)
    ) {
      return;
    }
    const existing = this.types.get(node.name.text);
    if (existing) {
      assert(
        ts.isInterfaceDeclaration(node) && ts.isInterfaceDeclaration(existing),
        'expected merging types to be interfaces',
      );
      this.types.set(node.name.text, mergeInterfaces(existing, node));
    } else {
      this.types.set(node.name.text, node);
    }
    if (ts.isInterfaceDeclaration(node) && node.members.some(isBrand)) {
      this.brands.add(node.name.text);
    }
    if (ts.isTypeAliasDeclaration(node)) {
      const tokenKind = tryGetTokenKind(node.type);
      if (tokenKind) {
        this.addToken(tokenKind, node.name.text);
      }
    }
    this.references.add(node);
  }

  public getNodeMembers(
    nameOrNode: string | Type,
    typeArguments?: readonly ts.TypeNode[],
  ): ts.PropertySignature[] | undefined {
    const node =
      typeof nameOrNode === 'string' ? this.types.get(nameOrNode) : nameOrNode;
    assert(node, 'expected a valid node');

    if (ts.isInterfaceDeclaration(node)) {
      return this.getInterfaceMembers(node, typeArguments);
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

      return this.getNodeMembers(getName(node.type.typeName), refTypeArguments);
    }
  }

  public getNodeSyntaxKind(
    nameOrNode: string | Declaration,
  ): string | undefined {
    const kindProp = this.getNodeMembers(nameOrNode)?.filter(
      (x) => ts.isIdentifier(x.name) && x.name.text === 'kind',
    )?.[0];
    if (!kindProp?.type || !ts.isTypeReferenceNode(kindProp.type)) {
      return;
    }
    const typeName = kindProp.type.typeName;
    if (
      ts.isQualifiedName(typeName) &&
      ts.isIdentifier(typeName.left) &&
      typeName.left.text === 'SyntaxKind'
    ) {
      return typeName.right.text;
    }
  }

  public getReferenceSourceNames(
    target: string,
    ...kind: ReferenceKind[]
  ): string[] {
    return this.references.get(target, ...kind).map(getReferenceSourceName);
  }

  public getGroupMembers(target: string): string[] {
    const tokens = this.getTokenNodeSyntaxKinds(target);
    if (tokens) {
      const instances = tokens.map((x) => this.tokens.get(x));
      // const missing = tokens.filter((x) => !this.tokens.get(x));
      // assert(
      //   !missing.length,
      //   `${target} looks like a token group but can't find [${missing}]`,
      // );
      return instances as string[];
    }
    return this.getReferenceSourceNames(target, 'heritage').filter((x) =>
      this.isNode(x),
    );
  }

  public getTokenNodeSyntaxKinds(
    nameOrNode: string | Declaration,
  ): string[] | undefined {
    const node =
      typeof nameOrNode === 'string' ? this.types.get(nameOrNode) : nameOrNode;
    assert(node, 'expected a valid node');

    if (
      !ts.isTypeAliasDeclaration(node) ||
      !ts.isTypeReferenceNode(node.type) ||
      !ts.isIdentifier(node.type.typeName) ||
      node.type.typeArguments?.length !== 1
    ) {
      return undefined;
    }
    const arg = node.type.typeArguments[0];
    if (!ts.isTypeReferenceNode(arg)) {
      return undefined;
    }
    const singleRef = getSyntaxKind(arg);
    if (singleRef) {
      return [singleRef];
    }
    return this.getSyntaxKindsUnion(arg.typeName);
  }

  public getTypeClass(name: string): TypeClassification {
    const node = this.types.get(name);
    assert(node, 'expected valid node');

    if (this.isNode(name)) {
      if (!node.typeParameters?.length && this.getNodeSyntaxKind(node)) {
        return 'NodeType';
      } else if (this.getGroupMembers(name).length) {
        return 'NodeGroup';
      } else if (this.isUnionOfNodes(name)) {
        return 'NodeUnion';
      } else if (this.brands.has(name)) {
        return 'NodeBrand';
      }
    } else if (this.isReferencedFromNode(name)) {
      return 'ReferencedNonNode';
    }
    return 'UnreferencedNonNode';
  }

  public isNode(name: string | ts.EntityName): boolean {
    const nameString = typeof name === 'string' ? name : getName(name);
    if (nameString === 'Node') {
      return true;
    }
    const type = this.types.get(nameString);
    if (!type) {
      return false;
    }
    if (ts.isInterfaceDeclaration(type)) {
      if (type.heritageClauses) {
        return type.heritageClauses
          .flatMap((clause) => clause.types)
          .some(
            (base) =>
              ts.isIdentifier(base.expression) &&
              this.isNode(base.expression.text),
          );
      }
    } else if (ts.isTypeAliasDeclaration(type)) {
      if (ts.isTypeReferenceNode(type.type)) {
        return this.isNode(type.type.typeName);
      }
      if (ts.isUnionTypeNode(type.type)) {
        return type.type.types.some(
          (member) =>
            ts.isTypeReferenceNode(member) && this.isNode(member.typeName),
        );
      }
    }
    return false;
  }

  public isReferencedFromNode(name: string, path: string[] = []): boolean {
    const refs = this.references.get(name);
    if (!refs.length) {
      return false;
    }
    for (const ref of refs) {
      const source = getName(ref.path[0].target);
      if (this.isNode(source)) {
        return true;
      }
      // guard against circular loops
      if (
        !path.includes(source) &&
        this.isReferencedFromNode(source, [...path, source])
      ) {
        return true;
      }
    }
    return false;
  }

  public isUnionOfNodes(name: string | ts.EntityName): boolean {
    const nameString = typeof name === 'string' ? name : getName(name);
    if (nameString === 'Node') {
      return true;
    }
    const node = this.types.get(nameString);
    return (
      !!node &&
      ts.isTypeAliasDeclaration(node) &&
      !node.typeParameters?.length &&
      ts.isUnionTypeNode(node.type) &&
      node.type.types.every(
        (member) =>
          ts.isTypeReferenceNode(member) &&
          (this.isNode(member.typeName) ||
            this.isUnionOfNodes(member.typeName)),
      )
    );
  }

  public getSyntaxKindsUnion(
    name: string | ts.EntityName,
  ): string[] | undefined {
    const nameString = typeof name === 'string' ? name : getName(name);
    const node = this.types.get(nameString);
    if (
      !node ||
      !ts.isTypeAliasDeclaration(node) ||
      !ts.isUnionTypeNode(node.type)
    ) {
      return undefined;
    }
    const kinds: string[] = [];
    for (const member of node.type.types) {
      const kind = getSyntaxKind(member);
      if (kind) {
        kinds.push(kind);
      } else if (ts.isTypeReferenceNode(member)) {
        const union = this.getSyntaxKindsUnion(member.typeName);
        if (union) {
          kinds.push(...union);
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    }
    return kinds;
  }

  private getInterfaceMembers(
    node: ts.InterfaceDeclaration,
    typeArguments?: readonly ts.TypeNode[],
  ): ts.PropertySignature[] | undefined {
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

      // replace refs to tokens
      memberType = replaceTypes(memberType, (ref) => {
        const kind = tryGetTokenKind(ref);
        if (kind) {
          const token = this.tokens.get(kind);
          if (token) {
            return ts.factory.createTypeReferenceNode(token);
          }
        }
        return ref;
      });

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
        let refTypeArgs: readonly ts.TypeNode[] | undefined =
          type.typeArguments;
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
        const baseMembers = this.getNodeMembers(
          type.expression.text,
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
}

export function collectDefinitions(module: ts.ModuleBlock): DefinitionContext {
  const ctx = new DefinitionContext();

  for (const statement of module.statements) {
    if (
      ts.isInterfaceDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement)
    ) {
      ctx.addType(statement);
    }
  }

  return ctx;
}

function replaceGenericTypes(
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

function replaceAllGenericTypes(
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

function replaceTypes(
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

function replaceAllTypes(
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

function isBrand(node: ts.TypeElement): boolean {
  return (
    ts.isPropertySignature(node) &&
    ts.isIdentifier(node.name) &&
    /^__?[a-z0-9]+Brand$/i.test(node.name.text)
  );
}

function mergeInterfaces(
  ...nodes: ts.InterfaceDeclaration[]
): ts.InterfaceDeclaration {
  return ts.factory.createInterfaceDeclaration(
    undefined,
    nodes[0].name,
    nodes[0].typeParameters,
    nodes.flatMap((node) => node.heritageClauses ?? []),
    nodes.flatMap((node) => node.members),
  );
}

function tryGetTokenKind(node: ts.TypeNode): string | undefined {
  if (
    !ts.isTypeReferenceNode(node) ||
    !getName(node.typeName).endsWith('Token') ||
    node.typeArguments?.length !== 1
  ) {
    return undefined;
  }
  return getSyntaxKind(node.typeArguments[0]);
}
