import ts from 'typescript';
import { Reference, collectReferences } from './collectReferences.js';
import { assert, getName } from './util.js';

export class DefinitionContext {
  public readonly brands = new Set<string>();
  public readonly interfaces = new Map<string, ts.InterfaceDeclaration[]>();
  public readonly referencesByTarget = new Map<string, Reference[]>();
  public readonly typeAliases = new Map<string, ts.TypeAliasDeclaration>();

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
    this.addReferences(collectReferences(node));
  }

  public addTypeAlias(node: ts.TypeAliasDeclaration): void {
    assert(
      !this.typeAliases.has(node.name.text),
      `unexpected duplicate type alias "${node.name.text}"`,
    );
    this.typeAliases.set(node.name.text, node);
    this.addReferences(collectReferences(node));
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

  public getReferencingNodeNames(target: string): string[] {
    return this.getReferenceSourceNames(target, 'property').filter(
      (sourceName) => this.isNodeOrBase(sourceName),
    );
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
