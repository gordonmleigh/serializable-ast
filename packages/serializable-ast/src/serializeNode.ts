import { relative, resolve } from 'path';
import { SourceMapConsumer } from 'source-map';
import ts from 'typescript';
import { shouldSerializeProp } from './shouldSerializeProp.js';
import { Node, SyntaxKind } from './types.generated.js';

/**
 * Get the node type for the given {@link SyntaxKind}.
 */
export type NodeOfKind<Kind extends SyntaxKind> = NodeOfSomeKind<Kind>;

/**
 * Get the node type for the given {@link SyntaxKind}, with the type parameter
 * being unconstrained.
 */
export type NodeOfSomeKind<Kind> = Node extends infer N
  ? N extends { kind: Kind }
    ? N
    : never
  : never;

/**
 * Get the name of the given TypeScript Compiler API {@link ts.SyntaxKind}
 * value.
 */
export type SyntaxKindName<Kind extends ts.SyntaxKind> = {
  [K in keyof typeof ts.SyntaxKind as (typeof ts.SyntaxKind)[K]]: K extends `First${string}`
    ? never
    : K extends `Last${string}`
    ? never
    : K;
}[Kind];

/**
 * Get the type of the serialized representation of the given TypeScript
 * Compiler API node.
 */
export type SerializedNode<T extends ts.Node> = NodeOfSomeKind<
  SyntaxKindName<T['kind']>
>;

/**
 * Options for the serializer.
 */
export interface SerializeOptions {
  includePosition?: boolean;
  sourceFile?: string;
  sourceMap?: SourceMapConsumer;
  workingDirectory?: string;
}

/**
 * Serialize the given TypeScript Compiler API node.
 * @param node The node to serialize.
 */
export function serializeNode<N extends ts.Node>(
  node: N,
  opts?: SerializeOptions,
): SerializedNode<N> {
  return serializeNodeInternal(
    node,
    {
      ...opts,
      // automatically include location if source info is provided
      includePosition:
        opts?.includePosition ?? !!(opts?.sourceFile || opts?.sourceMap),
    },
    new Path(),
  );
}

function serializeNodeInternal(
  node: any,
  opts: SerializeOptions,
  path: Path,
): any {
  const ret: any = {};
  let props: string[];
  if (ts.isSourceFile(node)) {
    props = [
      'endOfFileToken',
      'fileName',
      'hasNoDefaultLib',
      'isDeclarationFile',
      'kind',
      'moduleName',
      'statements',
    ];
  } else {
    props = getAllPropertyNames(node);
  }

  for (const key of props) {
    const value = node[key];
    if (!shouldSerializeProp(key, value)) {
      continue;
    }
    const serializedValue = serializeProperty(
      value,
      key,
      opts,
      path.add(key, value),
    );
    if (serializedValue !== undefined) {
      ret[key] = serializedValue;
    }
  }
  if (
    opts?.includePosition &&
    node.kind &&
    node.getSourceFile &&
    typeof node.pos === 'number' &&
    node.pos > -1
  ) {
    const sourceFile = node.getSourceFile() as ts.SourceFile;
    const cwd = resolve(opts?.workingDirectory ?? '.');
    const relativeSourceFilePath = relative(cwd, sourceFile.fileName);
    const location = ts.getLineAndCharacterOfPosition(sourceFile, node.pos);

    if (opts.sourceMap) {
      const original = opts.sourceMap.originalPositionFor({
        column: location.character,
        line: location.line + 1,
      });
      if (original.column !== null && original.line !== null) {
        ret.pos = {
          char: original.column + 1,
          line: original.line,
          file: original.source
            ? relative(cwd, resolve(relativeSourceFilePath, original.source))
            : relativeSourceFilePath,
        };
      }
    }
    if (!ret.pos) {
      ret.pos = {
        char: location.character + 1,
        line: location.line + 1,
        file: opts.sourceFile ?? relativeSourceFilePath,
      };
    }
  }
  return ret;
}

function serializeArray(
  value: any[],
  opts: SerializeOptions,
  path: Path,
): any[] {
  return value.map((value, i) =>
    serializeProperty(value, undefined, opts, path.add(`${i}`, value)),
  );
}

function serializeProperty(
  value: any,
  key: string | undefined,
  opts: SerializeOptions,
  path: Path,
): any {
  if (Array.isArray(value)) {
    return serializeArray(value, opts, path);
  }
  if (key === 'fileName' && typeof value === 'string') {
    return relative(resolve(opts?.workingDirectory ?? '.'), value);
  }
  if (typeof value === 'object') {
    return serializeNodeInternal(value, opts, path);
  }
  if (key === 'kind' && typeof value === 'number') {
    return getSyntaxName(value);
  }
  return value;
}

function getAllPropertyNames(obj: any): string[] {
  const props: string[] = [];
  for (let curr = obj; curr; curr = Object.getPrototypeOf(curr)) {
    props.push(...Object.getOwnPropertyNames(curr));
  }
  return props;
}

const syntaxKindNames = Object.fromEntries(
  Object.entries(ts.SyntaxKind)
    .filter(
      ([k]) =>
        !k.startsWith('First') && !k.startsWith('Last') && isNaN(k as any),
    )
    .map(([k, v]) => [v, k]),
);

function getSyntaxName(value: number): string {
  return syntaxKindNames[value];
}

class Path {
  constructor(private readonly path: [string, any][] = []) {}

  public get pathNames(): string[] {
    return this.path.map(([k]) => k);
  }

  public add(key: string, value: any): Path {
    if (this.isCircularRef(key, value)) {
      throw new Error(`circular ref`);
    }
    return new Path([
      ...this.path,
      [key, typeof value === 'object' ? value : undefined],
    ]);
  }

  private isCircularRef(key: string, value: any): boolean {
    if (this.path.find(([, v]) => v !== undefined && v === value)) {
      console.warn(`circular ref: ${[...this.pathNames, key].join(' -> ')}`);
      return true;
    }
    return false;
  }
}
