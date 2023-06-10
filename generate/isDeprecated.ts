import ts from 'typescript';

export function isDeprecated(node: ts.Node): boolean {
  const jsdoc = ts.getJSDocTags(node);
  return jsdoc.some((x) => x.tagName.text === 'deprecated');
}
