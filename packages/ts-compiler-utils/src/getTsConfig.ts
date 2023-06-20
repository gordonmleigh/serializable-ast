import { existsSync } from 'fs';
import ts from 'typescript';

export function getTsConfig(path: string): ts.ParsedCommandLine | undefined {
  const configPath = ts.findConfigFile(path, existsSync);
  if (configPath) {
    return ts.getParsedCommandLineOfConfigFile(
      configPath,
      undefined,
      ts.sys as any,
    );
  }
}
