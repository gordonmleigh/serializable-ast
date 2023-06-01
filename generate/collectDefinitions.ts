import ts from 'typescript';
import { Reference, collectReferences } from './collectReferences.js';
import { assert, getName } from './util.js';

interface GenericNodeInstantiation {
  nodeName: string;
  typeArgumentName: string;
}

export class DefinitionContext {
  public readonly brands = new Set<string>();
  public readonly genericNodeInstantiations = new Map<
    string,
    GenericNodeInstantiation[]
  >();
  public readonly groups = new Map<string, string[]>();
  public readonly interfaces = new Map<string, ts.InterfaceDeclaration[]>();
  public readonly kindUnions = new Map<string, string[]>();
  public readonly referencesByTarget = new Map<string, Reference[]>();
  public readonly typeAliases = new Map<string, ts.TypeAliasDeclaration>();

  public addGenericNodeInstantiation(node: ts.TypeAliasDeclaration): void {
    assert(
      this.isGenericNodeInstantiation(node),
      'expected node to be a generic node instantiation',
    );
    assert(
      ts.isIdentifier(node.type.typeName),
      'expected typeName to be an identifier',
    );
    const typeArgument = node.type.typeArguments[0];
    assert(ts.isTypeReferenceNode(typeArgument));
    const nodeName = node.name.text;
    const baseName = node.type.typeName.text;
    const typeArgumentName = getName(typeArgument.typeName);

    const existing = this.genericNodeInstantiations.get(baseName);
    if (existing) {
      existing.push({
        nodeName,
        typeArgumentName,
      });
    } else {
      this.genericNodeInstantiations.set(baseName, [
        {
          nodeName,
          typeArgumentName,
        },
      ]);
    }
  }

  public addInterface(node: ts.InterfaceDeclaration): void {
    const existing = this.interfaces.get(node.name.text);
    if (existing) {
      existing.push(node);
    } else {
      this.interfaces.set(node.name.text, [node]);
    }
    if (node.members.some(isBrand)) {
      this.brands.add(node.name.text);
    }
    for (const member of node.members) {
      if (ts.isPropertyDeclaration(member)) {
        if (!member.type) {
          continue;
        }
      }
    }
    if (node.heritageClauses) {
      for (const clause of node.heritageClauses) {
        for (const type of clause.types) {
          assert(ts.isIdentifier(type.expression), 'expected identifier');
          this.addToGroup(type.expression.text, node.name.text);
        }
      }
    }
    this.addReferences(collectReferences(node));
  }

  public addTypeAlias(node: ts.TypeAliasDeclaration): void {
    assert(
      !this.typeAliases.has(node.name.text),
      `unexpected duplicate type alias "${node.name.text}"`,
    );
    this.typeAliases.set(node.name.text, node);
    this.addReferences(collectReferences(node));

    const kinds = tryGetUnionOfSyntaxKinds(node);
    if (kinds) {
      this.kindUnions.set(node.name.text, kinds);
    } else if (this.isGenericNodeInstantiation(node)) {
      this.addToGroup(getName(node.type.typeName), node.name.text);
      this.addGenericNodeInstantiation(node);
    } else if (ts.isTypeReferenceNode(node.type)) {
      this.addToGroup(getName(node.type.typeName), node.name.text);
    } else if (ts.isUnionTypeNode(node.type)) {
      for (const type of node.type.types) {
        if (ts.isTypeReferenceNode(type)) {
          this.addToGroup(getName(type.typeName), node.name.text);
        }
      }
    }
  }

  public getGroupMembers(name: string): string[] | undefined {
    const interfaces = this.groups
      .get(name)
      ?.filter((iface) => this.isNodeOrBase(iface));

    if (!interfaces?.length) {
      return;
    }
    return interfaces;
  }

  public getReferences(target: string, kind?: Reference['kind']): Reference[] {
    const refs = this.referencesByTarget.get(target);
    if (!refs) {
      return [];
    }
    if (kind) {
      return refs.filter((ref) => ref.kind === kind);
    }
    return refs;
  }

  public getReferenceSourceNames(
    target: string,
    kind?: Reference['kind'],
  ): string[] {
    return this.getReferences(target, kind).map((x) => x.source);
  }

  public isGenericNodeInstantiation(
    node: ts.TypeAliasDeclaration,
  ): node is ts.TypeAliasDeclaration & {
    type: ts.TypeReferenceNode & {
      typeArguments: ts.NodeArray<ts.TypeNode>;
    };
  } {
    if (node.typeParameters?.length || !ts.isTypeReferenceNode(node.type)) {
      return false;
    }
    return (
      node.type.typeArguments?.length === 1 &&
      this.isNodeOrBase(getName(node.type.typeName))
    );
  }

  public isNodeOrBase(name: string): boolean {
    if (name === 'Node') {
      return true;
    }
    const interfaces = this.interfaces.get(name);
    if (interfaces) {
      for (const iface of interfaces) {
        if (!iface.heritageClauses) {
          continue;
        }
        for (const clause of iface.heritageClauses) {
          for (const type of clause.types) {
            assert(ts.isIdentifier(type.expression), 'expected identifier');
            return this.isNodeOrBase(type.expression.text);
          }
        }
      }
      return false;
    } else {
      const alias = this.typeAliases.get(name);
      if (!alias || !ts.isTypeReferenceNode(alias.type)) {
        return false;
      }
      return this.isNodeOrBase(getName(alias.type.typeName));
    }
  }

  public isUnionOfNodesOrBases(name: string): boolean {
    const alias = this.typeAliases.get(name);
    if (!alias || alias.typeParameters?.length) {
      return false;
    }
    if (ts.isTypeReferenceNode(alias.type)) {
      // a union of one
      return this.isNodeOrBase(getName(alias.type.typeName));
    }
    if (!ts.isUnionTypeNode(alias.type)) {
      return false;
    }
    for (const type of alias.type.types) {
      if (!ts.isTypeReferenceNode(type)) {
        return false;
      }
      const name = getName(type.typeName);
      if (!this.isNodeOrBase(name) && !this.isUnionOfNodesOrBases(name)) {
        return false;
      }
    }
    return true;
  }

  private addToGroup(group: string, member: string): void {
    const existing = this.groups.get(group);
    if (existing) {
      existing.push(member);
    } else {
      this.groups.set(group, [member]);
    }
  }

  private addReference(
    source: string,
    target: ts.TypeReferenceNode,
    kind: Reference['kind'],
  ): void {
    const targetName = getName(target.typeName);
    const existing = this.referencesByTarget.get(targetName);
    if (existing) {
      existing.push({ kind, source, target });
    } else {
      this.referencesByTarget.set(targetName, [{ kind, source, target }]);
    }
  }

  private addReferences(references: Reference[]) {
    for (const ref of references) {
      this.addReference(ref.source, ref.target, ref.kind);
    }
  }
}

export function collectDefinitions(module: ts.ModuleBlock): DefinitionContext {
  const ctx = new DefinitionContext();

  for (const statement of module.statements) {
    if (ts.isInterfaceDeclaration(statement)) {
      ctx.addInterface(statement);
    } else if (ts.isTypeAliasDeclaration(statement)) {
      ctx.addTypeAlias(statement);
    }
  }

  return ctx;
}

function isBrand(node: ts.TypeElement): boolean {
  return (
    ts.isPropertyDeclaration(node) &&
    ts.isIdentifier(node.name) &&
    /^_[a-z0-9]+Brand$/i.test(node.name.text)
  );
}

function tryGetUnionOfSyntaxKinds(
  node: ts.TypeAliasDeclaration,
): string[] | undefined {
  if (!ts.isUnionTypeNode(node.type)) {
    return;
  }
  const kinds: string[] = [];
  for (const type of node.type.types) {
    if (
      !ts.isTypeReferenceNode(type) ||
      !ts.isQualifiedName(type.typeName) ||
      !ts.isIdentifier(type.typeName.left) ||
      type.typeName.left.text !== 'SyntaxKind'
    ) {
      return;
    }
    kinds.push(type.typeName.right.text);
  }
  return kinds;
}
