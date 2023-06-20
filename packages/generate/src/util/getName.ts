import ts from 'typescript';
import { assert } from './assert.js';

export function getName(name: ts.EntityName): string {
  assert(name, 'expected a value');
  if (ts.isQualifiedName(name)) {
    return `${getName(name.left)}.${name.right.text}`;
  }
  return name.text;
}
