import ts from 'typescript';

export function printDiagnostics(diagnostics: readonly ts.Diagnostic[]): void {
  console.error(
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
      getNewLine: () => ts.sys.newLine,
      getCanonicalFileName: ts.sys.useCaseSensitiveFileNames
        ? (x) => x
        : (x) => x.toLowerCase(),
    }),
  );
}
