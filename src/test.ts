import { readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { SourceMapConsumer } from 'source-map';
import ts from 'typescript';
import { fileURLToPath } from 'url';
import { getTsConfig } from './getTsConfig.js';
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
    for (const diag of diagnostics) {
      let pos: string;
      if (diag.file && diag.start !== undefined) {
        const loc = ts.getLineAndCharacterOfPosition(diag.file, diag.start);
        pos = `${diag.file.fileName}(${loc.line + 1}, ${loc.character + 1})`;
      } else {
        pos = 'unknown';
      }
      console.error(`${ts.DiagnosticCategory[diag.category]}: ${pos}:`);
      if (typeof diag.messageText === 'string') {
        console.error(diag.messageText);
      } else {
        console.error(diag.messageText.messageText);
      }
    }
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
