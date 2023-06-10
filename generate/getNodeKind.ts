import ts from 'typescript';
import { getSyntaxKind } from './getSyntaxKind.js';
import { NodeMember } from './isValidNodeMember.js';

export function getNodeKind(members: NodeMember[]): string | undefined {
  const prop = members.find(
    (x) => ts.isIdentifier(x.name) && x.name.text === 'kind',
  );
  if (!prop) {
    return;
  }
  return getSyntaxKind(prop.type);
}
