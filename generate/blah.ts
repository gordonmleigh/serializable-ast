import ts from 'typescript';
import { assert } from './util.js';

const blockedTypes = [
  'Bundle',
  'NodeArray',
  'SourceFile',
  'SyntheticExpression',
  'TransientIdentifier',
];

export function processModuleDeclaration(
  module: ts.ModuleDeclaration,
): ts.SourceFile {
  assert(module.body && ts.isModuleBlock(module.body), 'expected ModuleBlock');

  const refs = new Map<string, Declaration>();

  for (const statement of module.body.statements) {
    if (ts.isInterfaceDeclaration(statement)) {
      if (blockedTypes.includes(statement.name.text)) {
        continue;
      }
    } else if (ts.isTypeAliasDeclaration(statement)) {
      if (blockedTypes.includes(statement.name.text)) {
        continue;
      }
    }
  }
}
