import ts from 'typescript';
import {
  assert,
  getName,
  getSyntaxKindFromTokenRef,
  isValidNodeMember,
} from './util.js';

const blockedTypes = [
  'Bundle',
  'NodeArray',
  'SourceFile',
  'SyntheticExpression',
  'TransientIdentifier',
];

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
  | 'generic'
  | 'heritage'
  | 'intersection'
  | 'member'
  | 'property'
  | 'union';

export interface Reference {
  kind: ReferenceKind;
  source: string;
  target: string;
  typeArguments?: readonly ts.TypeNode[];
}

export class DeclarationCollection implements Iterable<[string, Declaration]> {
  private readonly refs = new Map<string, Declaration>();
  private readonly tokens = new Map<string, string>();

  public readonly missingTokens = new Map<string, string>();

  public [Symbol.iterator](): Iterator<[string, Declaration], any, undefined> {
    return this.refs.entries();
  }

  public add(node: TsDeclarationNode): void {
    if (blockedTypes.includes(node.name.text)) {
      return;
    }
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

  public get(name: string | ts.EntityName): Declaration | undefined {
    const nameString = typeof name === 'string' ? name : getName(name);
    return this.refs.get(nameString);
  }

  public getToken(
    syntaxKind: string,
    tokenType: string | ts.EntityName,
  ): string {
    const token = this.tokens.get(syntaxKind);
    if (!token) {
      const existing = this.missingTokens.get(syntaxKind);
      assert(
        !existing || existing === tokenType,
        `duplicate token type for ${syntaxKind}`,
      );
      if (!existing) {
        this.missingTokens.set(
          syntaxKind,
          typeof tokenType === 'string' ? tokenType : getName(tokenType),
        );
      }
    }
    return token ?? syntaxKind;
  }

  public keys(): IterableIterator<string> {
    return this.refs.keys();
  }

  private addAlias(node: ts.TypeAliasDeclaration): void {
    this.addConstraints(node);
    this.addType(node.name.text, node.type, 'alias');

    if (ts.isTypeReferenceNode(node.type)) {
      const tokenKind = getSyntaxKindFromTokenRef(node.type);
      if (tokenKind) {
        this.tokens.set(tokenKind, node.name.text);
      }
    }
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

  private addQualifiedName(source: string, name: ts.EntityName): void {
    const names = [name];
    for (const current = names.pop(); !!current; ) {
      this.addReference({ kind: 'member', source, target: getName(current) });
      if (ts.isQualifiedName(current)) {
        names.push(current.left);
      }
    }
  }

  private addReference(ref: Reference): void {
    const existing = this.refs.get(ref.target);
    if (!existing) {
      this.refs.set(ref.target, { references: [ref] });
    } else {
      existing.references.push(ref);
    }
  }

  private addType(
    source: string,
    node: ts.TypeNode,
    kind: ReferenceKind,
  ): void {
    if (isTypeRef(node)) {
      const typeName = ts.isTypeReferenceNode(node)
        ? node.typeName
        : node.expression;

      if (node.typeArguments) {
        this.addReference({
          kind,
          source,
          target: getName(typeName),
          typeArguments: node.typeArguments,
        });
        for (const arg of node.typeArguments) {
          this.addType(source, arg, 'generic');
        }
      } else {
        this.addReference({
          kind,
          source,
          target: getName(typeName),
        });
      }
      if (ts.isQualifiedName(typeName)) {
        // add all the name parts for a qualified name
        this.addQualifiedName(source, typeName.left);
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

type TypeRef =
  | ts.TypeReferenceNode
  | (ts.ExpressionWithTypeArguments & { expression: ts.EntityName });

function isTypeRef(node: ts.TypeNode): node is TypeRef {
  return (
    ts.isTypeReferenceNode(node) ||
    (ts.isExpressionWithTypeArguments(node) && ts.isEntityName(node.expression))
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
