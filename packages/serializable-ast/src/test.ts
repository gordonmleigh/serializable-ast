import { getTsConfig, printDiagnostics } from '@w/ts-compiler-utils';
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

  const config = getTsConfig(entrypoint);
  const program = ts.createProgram([entrypoint], config?.options ?? {});
  const diagnostics = ts.getPreEmitDiagnostics(program);

  if (diagnostics.length) {
    printDiagnostics(diagnostics);
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
