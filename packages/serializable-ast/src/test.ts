import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { SourceMapConsumer } from 'source-map';
import ts from 'typescript';
import { fileURLToPath } from 'url';
import { serializeNode } from './serializeNode.js';

const __filename = resolve(fileURLToPath(import.meta.url));
const __dirname = dirname(__filename);

await main();

async function main(): Promise<void> {
  const entrypoint = resolve(__dirname, '../lib/serializeNode.d.ts');
  let config: ts.ParsedCommandLine | undefined;

  const configPath = ts.findConfigFile(entrypoint, existsSync);
  if (configPath) {
    config = ts.getParsedCommandLineOfConfigFile(
      configPath,
      undefined,
      ts.sys as any,
    );
  }

  const program = ts.createProgram([entrypoint], config?.options ?? {});
  const diagnostics = ts.getPreEmitDiagnostics(program);

  if (diagnostics.length) {
    console.error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
        getNewLine: () => ts.sys.newLine,
        getCanonicalFileName: ts.sys.useCaseSensitiveFileNames
          ? (x) => x
          : (x) => x.toLowerCase(),
      }),
    );
    process.exit(1);
  }

  const sourceFile = program.getSourceFile(entrypoint);
  if (!sourceFile) {
    throw new Error(`expected to find source file for entrypoint`);
  }

  const output = serializeNode(sourceFile, {
    sourceMap: await new SourceMapConsumer(
      await readFile(
        resolve(__dirname, '../lib/serializeNode.d.ts.map'),
        'utf-8',
      ),
    ),
  });
  await writeFile('out.log.json', JSON.stringify(output, null, 2));
}
