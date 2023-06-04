import ts from 'typescript';
import { getName } from './util.js';

export type ReferenceKind =
  | 'alias'
  | 'constraint'
  | 'direct'
  | 'generic'
  | 'heritage'
  | 'interface'
  | 'intersection'
  | 'member'
  | 'property'
  | 'union';

export interface ReferencePath {
  kind: ReferenceKind;
  target: ts.EntityName;
  typeArguments?: readonly ts.TypeNode[];
}

export interface Reference {
  path: readonly ReferencePath[];
}

export class ReferenceCollection implements Iterable<[string, Reference[]]> {
  private readonly currentPath: ReferencePath[] = [];
  private readonly references = new Map<string, Reference[]>();

  public [Symbol.iterator](): Iterator<[string, Reference[]]> {
    return this.references[Symbol.iterator]();
  }

  public add(node: ts.Node): void {
    if (ts.isInterfaceDeclaration(node)) {
      this.addInterface(node);
    } else if (ts.isTypeAliasDeclaration(node)) {
      this.addAlias(node);
    }
  }

  public get(name: string, ...kind: ReferenceKind[]): Reference[] {
    const refs = this.references.get(name);
    if (!refs) {
      return [];
    }
    if (!kind.length) {
      return refs;
    }
    return refs.filter((ref) => kind.includes(getReferenceKind(ref)));
  }

  public keys(): IterableIterator<string> {
    return this.references.keys();
  }

  private addAlias(node: ts.TypeAliasDeclaration): void {
    this.pushReference({ kind: 'alias', target: node.name });
    this.addConstraints(node);
    this.addType(node.type, 'alias');
    this.popReference();
  }

  private addConstraints(
    node: ts.InterfaceDeclaration | ts.TypeAliasDeclaration,
  ): void {
    if (!node.typeParameters) {
      return;
    }
    for (const param of node.typeParameters) {
      if (param.constraint) {
        this.addType(param.constraint, 'constraint');
      }
    }
  }

  private addInterface(node: ts.InterfaceDeclaration): void {
    this.pushReference({ kind: 'interface', target: node.name });
    this.addConstraints(node);

    for (const member of node.members) {
      if (ts.isPropertySignature(member) && member.type) {
        this.addType(member.type, 'property');
      }
    }

    if (node.heritageClauses) {
      for (const clause of node.heritageClauses) {
        for (const type of clause.types) {
          this.addType(type, 'heritage');
        }
      }
    }
    this.popReference();
  }

  private addReference(path: ReferencePath): void {
    const ref = { path: [...this.currentPath, path] };
    const name = getName(path.target);
    const existing = this.references.get(name);
    if (existing) {
      existing.push(ref);
    } else {
      this.references.set(name, [ref]);
    }
  }

  private addType(node: ts.TypeNode, kind: ReferencePath['kind']): void {
    if (isTypeRef(node)) {
      const memberKind = kind === 'alias' ? 'direct' : kind;

      const typeName = ts.isTypeReferenceNode(node)
        ? node.typeName
        : node.expression;

      if (node.typeArguments) {
        this.pushReference({
          kind: memberKind,
          target: typeName,
          typeArguments: node.typeArguments,
        });
        for (const arg of node.typeArguments) {
          this.addType(arg, 'generic');
        }
      } else {
        this.pushReference({ kind: memberKind, target: typeName });
      }
      if (ts.isQualifiedName(typeName)) {
        // add all the name parts for a qualified name
        this.addTypeMemberReference(typeName.left);
      }
      this.popReference();
    } else if (ts.isUnionTypeNode(node)) {
      const memberKind = kind === 'alias' ? 'union' : kind;
      for (const member of node.types) {
        this.addType(member, memberKind);
      }
    } else if (ts.isIntersectionTypeNode(node)) {
      const memberKind = kind === 'alias' ? 'intersection' : kind;
      for (const member of node.types) {
        this.addType(member, memberKind);
      }
    }
  }

  private addTypeMemberReference(name: ts.EntityName): void {
    const names = [name];
    for (;;) {
      const current = names.pop();
      if (!current) {
        break;
      }
      this.addReference({ kind: 'member', target: current });
      if (ts.isQualifiedName(current)) {
        names.push(current.left);
      }
    }
  }

  private pushReference(ref: ReferencePath): void {
    this.addReference(ref);
    this.currentPath.push(ref);
  }

  private popReference(): void {
    this.currentPath.pop();
  }
}

export function getReferenceSourceName(ref: Reference): string {
  return getName(ref.path[0].target);
}

export function getReferenceKind(ref: Reference): ReferenceKind {
  return ref.path[ref.path.length - 1].kind;
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
