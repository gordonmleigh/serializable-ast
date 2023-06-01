import { writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import ts from 'typescript';
import { fileURLToPath } from 'url';
import { processModuleDeclaration } from './processModuleDeclaration.js';

const __filename = resolve(fileURLToPath(import.meta.url));
const __dirname = dirname(__filename);

main();

function main(): void {
  const entrypoint = resolve(
    __dirname,
    '../node_modules/typescript/lib/typescript.d.ts',
  );

  const program = ts.createProgram([entrypoint], {});
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length) {
    console.error(`compiler error(s)`);
    process.exit(1);
  }

  const sourceFile = program.getSourceFile(entrypoint);
  if (!sourceFile) {
    throw new Error(`expected to find source file for entrypoint`);
  }

  for (const statement of sourceFile.statements) {
    if (ts.isModuleDeclaration(statement) && statement.name.text === 'ts') {
      const output = processModuleDeclaration(statement);
      const printer = ts.createPrinter();
      const source = printer.printFile(output);
      writeFileSync(resolve(__dirname, '../.local/out.ts'), source);
      return;
    }
  }

  console.error(`didn't find 'ts' namespace`);
  process.exit(1);
}
