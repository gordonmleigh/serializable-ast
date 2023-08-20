import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import Prettier from 'prettier';
import ts from 'typescript';
import { processModuleDeclaration } from './processModuleDeclaration.js';

if (process.argv.length !== 4) {
  console.error(`usage: ${process.argv0} <input> <output>`);
  process.exit(2);
}

await main(process.argv[2], process.argv[3]);

async function main(inputPath: string, outputPath: string): Promise<void> {
  let config: ts.ParsedCommandLine | undefined;

  const configPath = ts.findConfigFile(inputPath, existsSync);
  if (configPath) {
    config = ts.getParsedCommandLineOfConfigFile(
      configPath,
      undefined,
      ts.sys as any,
    );
  }

  const program = ts.createProgram([inputPath], config?.options ?? {});

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

  const sourceFile = program.getSourceFile(inputPath);
  if (!sourceFile) {
    throw new Error(`expected to find source file for entrypoint`);
  }

  const module = findNamespace(sourceFile);
  const output = processModuleDeclaration(module);
  const printer = ts.createPrinter();
  const source = printer.printFile(output);

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
