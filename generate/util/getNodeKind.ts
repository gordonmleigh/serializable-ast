import ts from 'typescript';
import { NodeMember } from '../classification/isValidNodeMember.js';
import { getSyntaxKind } from './getSyntaxKind.js';

export function getNodeKind(members: NodeMember[]): string | undefined {
  const prop = members.find(
    (x) => ts.isIdentifier(x.name) && x.name.text === 'kind',
  );
  if (!prop) {
    return;
  }
  return getSyntaxKind(prop.type);
}
