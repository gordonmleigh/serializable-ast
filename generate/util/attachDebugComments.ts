import ts from 'typescript';

export function attachDebugComments<T extends ts.Node>(
  node: T,
  comments: string,
): T {
  if (!process.env.DEBUG) {
    return node;
  }
  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.SingleLineCommentTrivia,
    comments,
  );
}
