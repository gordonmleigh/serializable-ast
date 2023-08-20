import ts from 'typescript';

export function attachJSDoc<T extends ts.Node>(node: T, group: string): T {
  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    `*\n * @group ${group}\n`,
    true,
  );
}
