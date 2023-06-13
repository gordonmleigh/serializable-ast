import { writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import Prettier from 'prettier';
import ts from 'typescript';
import { fileURLToPath } from 'url';
import { processModuleDeclaration } from './processModuleDeclaration.js';

const __filename = resolve(fileURLToPath(import.meta.url));
const __dirname = dirname(__filename);

await main();

async function main(): Promise<void> {
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

  const module = findNamespace(sourceFile);
  const output = processModuleDeclaration(module);
  const printer = ts.createPrinter();
  const source = printer.printFile(output);

  const outputPath = resolve(__dirname, '../src/types.generated.ts');
  const prettierConfig = await Prettier.resolveConfig(outputPath);

  const prettifiedSource = Prettier.format(source, {
    ...prettierConfig,
    filepath: outputPath,
  });

  await writeFile(outputPath, prettifiedSource);
}

function findNamespace(sourceFile: ts.SourceFile): ts.ModuleDeclaration {
  for (const statement of sourceFile.statements) {
    if (ts.isModuleDeclaration(statement) && statement.name.text === 'ts') {
      return statement;
    }
  }
  console.error(`didn't find 'ts' namespace`);
  process.exit(1);
}
