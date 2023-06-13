import ts from 'typescript';
import { isValidNodeMember } from '../classification/isValidNodeMember.js';
import { assert } from './assert.js';
import { getName } from './getName.js';

export type TsDeclarationNode =
  | ts.InterfaceDeclaration
  | ts.TypeAliasDeclaration;

export interface Declaration {
  references: Reference[];
  node?: TsDeclarationNode;
}

export type ReferenceKind =
  | 'alias'
  | 'constraint'
  | 'generic-argument'
  | 'generic-instance'
  | 'heritage'
  | 'intersection'
  | 'property'
  | 'union';

export interface Reference {
  kind: ReferenceKind;
  source: string;
  target: ts.TypeReferenceNode;
}

export function isDeclarationNode(node: ts.Node): node is TsDeclarationNode {
  return ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node);
}

export class DeclarationCollection implements Iterable<Declaration> {
  private readonly refs = new Map<string, Declaration>();

  public [Symbol.iterator](): Iterator<Declaration, any, undefined> {
    return this.refs.values();
  }

  public add(node: TsDeclarationNode): void {
    const existing = this.refs.get(node.name.text);
    if (existing) {
      if (ts.isTypeAliasDeclaration(node)) {
        assert(
          !existing.node,
          `unexpected duplicate definition ${node.name.text}`,
        );
        existing.node = node;
      } else if (existing.node) {
        assert(
          ts.isInterfaceDeclaration(existing.node),
          'multiple definitions must be interfaces',
        );
        existing.node = mergeInterfaces(existing.node, node);
      } else {
        existing.node = node;
      }
    } else {
      this.refs.set(node.name.text, { node, references: [] });
    }
    if (ts.isInterfaceDeclaration(node)) {
      this.addInterface(node);
    } else if (ts.isTypeAliasDeclaration(node)) {
      this.addAlias(node);
    }
  }

  public *declarations(): IterableIterator<TsDeclarationNode> {
    for (const item of this.refs.values()) {
      if (item.node) {
        yield item.node;
      }
    }
  }

  public get(name: string | ts.EntityName): Declaration | undefined {
    const nameString = typeof name === 'string' ? name : getName(name);
    return this.refs.get(nameString);
  }

  public getReferences(
    name: string | ts.EntityName,
    ...kinds: ReferenceKind[]
  ): Reference[] {
    const def = this.get(name);
    if (!def) {
      return [];
    }
    if (!kinds.length) {
      return def.references;
    }
    return def.references.filter((x) => kinds.includes(x.kind));
  }

  public keys(): IterableIterator<string> {
    return this.refs.keys();
  }

  private addAlias(node: ts.TypeAliasDeclaration): void {
    this.addConstraints(node);
    this.addType(node.name.text, node.type, 'alias');
  }

  private addConstraints(node: TsDeclarationNode): void {
    if (!node.typeParameters) {
      return;
    }
    const source = node.name.text;
    for (const param of node.typeParameters) {
      if (param.constraint) {
        this.addType(source, param.constraint, 'constraint');
      }
    }
  }

  private addInterface(node: ts.InterfaceDeclaration): void {
    const source = node.name.text;
    this.addConstraints(node);

    for (const member of node.members) {
      if (isValidNodeMember(member)) {
        this.addType(source, member.type, 'property');
      }
    }

    if (node.heritageClauses) {
      for (const clause of node.heritageClauses) {
        for (const type of clause.types) {
          this.addType(source, type, 'heritage');
        }
      }
    }
  }

  private addReference(ref: Reference): void {
    const typeName = getName(ref.target.typeName);
    const existing = this.refs.get(typeName);
    if (!existing) {
      this.refs.set(typeName, { references: [ref] });
    } else {
      existing.references.push(ref);
    }
  }

  private addType(
    source: string,
    node: ts.TypeNode,
    kind: ReferenceKind,
  ): void {
    let target: ts.TypeReferenceNode | undefined;
    if (ts.isTypeReferenceNode(node)) {
      target = node;
    } else if (
      ts.isExpressionWithTypeArguments(node) &&
      ts.isIdentifier(node.expression)
    ) {
      target = ts.factory.createTypeReferenceNode(
        node.expression.text,
        node.typeArguments,
      );
    }
    if (target) {
      if (target.typeArguments) {
        this.addReference({
          kind,
          source,
          target,
        });
        this.addReference({
          kind: 'generic-instance',
          source,
          target,
        });
        for (const arg of target.typeArguments) {
          this.addType(source, arg, 'generic-argument');
        }
      } else {
        this.addReference({
          kind,
          source,
          target,
        });
      }
    } else if (ts.isUnionTypeNode(node)) {
      const memberKind = kind === 'alias' ? 'union' : kind;
      for (const member of node.types) {
        this.addType(source, member, memberKind);
      }
    } else if (ts.isIntersectionTypeNode(node)) {
      const memberKind = kind === 'alias' ? 'intersection' : kind;
      for (const member of node.types) {
        this.addType(source, member, memberKind);
      }
    }
  }
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
