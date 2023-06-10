import ts from 'typescript';

export function getName(name: ts.EntityName): string {
  if (ts.isQualifiedName(name)) {
    return `${getName(name.left)}.${name.right.text}`;
  }
  return name.text;
}
