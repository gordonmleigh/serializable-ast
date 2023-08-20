/**
 * @group Core
 */
export type NodeArray<T> = readonly T[];
/**
 * @group Core
 */
export interface FileLocation {
  char?: number;
  line?: number;
  file?: string;
}
/**
 * @group Node Kinds
 */
export type SyntaxKind = Node['kind'];
/**
 * @group Node Kinds
 */
export type PunctuationSyntaxKind =
  | 'OpenBraceToken'
  | 'CloseBraceToken'
  | 'OpenParenToken'
  | 'CloseParenToken'
  | 'OpenBracketToken'
  | 'CloseBracketToken'
  | 'DotToken'
  | 'DotDotDotToken'
  | 'SemicolonToken'
  | 'CommaToken'
  | 'QuestionDotToken'
  | 'LessThanToken'
  | 'LessThanSlashToken'
  | 'GreaterThanToken'
  | 'LessThanEqualsToken'
  | 'GreaterThanEqualsToken'
  | 'EqualsEqualsToken'
  | 'ExclamationEqualsToken'
  | 'EqualsEqualsEqualsToken'
  | 'ExclamationEqualsEqualsToken'
  | 'EqualsGreaterThanToken'
  | 'PlusToken'
  | 'MinusToken'
  | 'AsteriskToken'
  | 'AsteriskAsteriskToken'
  | 'SlashToken'
  | 'PercentToken'
  | 'PlusPlusToken'
  | 'MinusMinusToken'
  | 'LessThanLessThanToken'
  | 'GreaterThanGreaterThanToken'
  | 'GreaterThanGreaterThanGreaterThanToken'
  | 'AmpersandToken'
  | 'BarToken'
  | 'CaretToken'
  | 'ExclamationToken'
  | 'TildeToken'
  | 'AmpersandAmpersandToken'
  | 'AmpersandAmpersandEqualsToken'
  | 'BarBarToken'
  | 'BarBarEqualsToken'
  | 'QuestionQuestionToken'
  | 'QuestionQuestionEqualsToken'
  | 'QuestionToken'
  | 'ColonToken'
  | 'AtToken'
  | 'BacktickToken'
  | 'HashToken'
  | 'EqualsToken'
  | 'PlusEqualsToken'
  | 'MinusEqualsToken'
  | 'AsteriskEqualsToken'
  | 'AsteriskAsteriskEqualsToken'
  | 'SlashEqualsToken'
  | 'PercentEqualsToken'
  | 'LessThanLessThanEqualsToken'
  | 'GreaterThanGreaterThanEqualsToken'
  | 'GreaterThanGreaterThanGreaterThanEqualsToken'
  | 'AmpersandEqualsToken'
  | 'BarEqualsToken'
  | 'CaretEqualsToken';
/**
 * @group Node Kinds
 */
export type KeywordSyntaxKind =
  | 'AbstractKeyword'
  | 'AccessorKeyword'
  | 'AnyKeyword'
  | 'AsKeyword'
  | 'AssertsKeyword'
  | 'AssertKeyword'
  | 'AsyncKeyword'
  | 'AwaitKeyword'
  | 'BigIntKeyword'
  | 'BooleanKeyword'
  | 'BreakKeyword'
  | 'CaseKeyword'
  | 'CatchKeyword'
  | 'ClassKeyword'
  | 'ConstKeyword'
  | 'ConstructorKeyword'
  | 'ContinueKeyword'
  | 'DebuggerKeyword'
  | 'DeclareKeyword'
  | 'DefaultKeyword'
  | 'DeleteKeyword'
  | 'DoKeyword'
  | 'ElseKeyword'
  | 'EnumKeyword'
  | 'ExportKeyword'
  | 'ExtendsKeyword'
  | 'FalseKeyword'
  | 'FinallyKeyword'
  | 'ForKeyword'
  | 'FromKeyword'
  | 'FunctionKeyword'
  | 'GetKeyword'
  | 'GlobalKeyword'
  | 'IfKeyword'
  | 'ImplementsKeyword'
  | 'ImportKeyword'
  | 'InferKeyword'
  | 'InKeyword'
  | 'InstanceOfKeyword'
  | 'InterfaceKeyword'
  | 'IntrinsicKeyword'
  | 'IsKeyword'
  | 'KeyOfKeyword'
  | 'LetKeyword'
  | 'ModuleKeyword'
  | 'NamespaceKeyword'
  | 'NeverKeyword'
  | 'NewKeyword'
  | 'NullKeyword'
  | 'NumberKeyword'
  | 'ObjectKeyword'
  | 'OfKeyword'
  | 'PackageKeyword'
  | 'PrivateKeyword'
  | 'ProtectedKeyword'
  | 'PublicKeyword'
  | 'ReadonlyKeyword'
  | 'OutKeyword'
  | 'OverrideKeyword'
  | 'RequireKeyword'
  | 'ReturnKeyword'
  | 'SatisfiesKeyword'
  | 'SetKeyword'
  | 'StaticKeyword'
  | 'StringKeyword'
  | 'SuperKeyword'
  | 'SwitchKeyword'
  | 'SymbolKeyword'
  | 'ThisKeyword'
  | 'ThrowKeyword'
  | 'TrueKeyword'
  | 'TryKeyword'
  | 'TypeKeyword'
  | 'TypeOfKeyword'
  | 'UndefinedKeyword'
  | 'UniqueKeyword'
  | 'UnknownKeyword'
  | 'VarKeyword'
  | 'VoidKeyword'
  | 'WhileKeyword'
  | 'WithKeyword'
  | 'YieldKeyword';
/**
 * @group Node Kinds
 */
export type ModifierSyntaxKind =
  | 'AbstractKeyword'
  | 'AccessorKeyword'
  | 'AsyncKeyword'
  | 'ConstKeyword'
  | 'DeclareKeyword'
  | 'DefaultKeyword'
  | 'ExportKeyword'
  | 'InKeyword'
  | 'PrivateKeyword'
  | 'ProtectedKeyword'
  | 'PublicKeyword'
  | 'ReadonlyKeyword'
  | 'OutKeyword'
  | 'OverrideKeyword'
  | 'StaticKeyword';
/**
 * @group Node Kinds
 */
export type KeywordTypeSyntaxKind =
  | 'AnyKeyword'
  | 'BigIntKeyword'
  | 'BooleanKeyword'
  | 'IntrinsicKeyword'
  | 'NeverKeyword'
  | 'NumberKeyword'
  | 'ObjectKeyword'
  | 'StringKeyword'
  | 'SymbolKeyword'
  | 'UndefinedKeyword'
  | 'UnknownKeyword'
  | 'VoidKeyword';
/**
 * @group Node Groups
 */
export type Node =
  | JSDocContainer
  | LocalsContainer
  | FlowContainer
  | Token
  | QualifiedName
  | Declaration
  | ComputedPropertyName
  | Decorator
  | VariableDeclarationList
  | ObjectBindingPattern
  | ArrayBindingPattern
  | TypeNode
  | ImportTypeAssertionContainer
  | Expression
  | LiteralLikeNode
  | TemplateSpan
  | JsxNamespacedName
  | JsxClosingElement
  | Statement
  | CaseBlock
  | CaseClause
  | DefaultClause
  | CatchClause
  | HeritageClause
  | ModuleBlock
  | ExternalModuleReference
  | AssertEntry
  | AssertClause
  | NamedImports
  | NamedExports
  | JSDocNameReference
  | JSDocMemberName
  | JSDoc
  | JSDocTag
  | JSDocLink
  | JSDocLinkCode
  | JSDocLinkPlain
  | JSDocText
  | SyntaxList;
/**
 * @group Node Groups
 */
export type JSDocContainer =
  | Identifier
  | TypeParameterDeclaration
  | SignatureDeclarationBase
  | VariableDeclaration
  | ParameterDeclaration
  | PropertySignature
  | PropertyDeclaration
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | ConstructorDeclaration
  | SemicolonClassElement
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ClassStaticBlockDeclaration
  | NamedTupleMember
  | BinaryExpression
  | FunctionExpression
  | ArrowFunction
  | ParenthesizedExpression
  | ObjectLiteralExpression
  | PropertyAccessExpression
  | ElementAccessExpression
  | Statement
  | CaseClause
  | ClassLikeDeclarationBase
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | EnumMember
  | EnumDeclaration
  | ModuleDeclaration
  | ImportEqualsDeclaration
  | NamespaceExportDeclaration
  | ExportDeclaration
  | ExportSpecifier
  | ExportAssignment
  | JSDocSignature;
/**
 * @group Node Groups
 */
export type LocalsContainer =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | FunctionDeclaration
  | MethodSignature
  | MethodDeclaration
  | ConstructorDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration
  | ClassStaticBlockDeclaration
  | FunctionTypeNode
  | ConstructorTypeNode
  | ConditionalTypeNode
  | MappedTypeNode
  | FunctionExpression
  | ArrowFunction
  | Block
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | CaseBlock
  | CatchClause
  | TypeAliasDeclaration
  | ModuleDeclaration
  | JSDocFunctionType
  | JSDocEnumTag
  | JSDocTypedefTag
  | JSDocCallbackTag
  | JSDocSignature
  | SourceFile;
/**
 * @group Node Groups
 */
export type FlowContainer =
  | Identifier
  | QualifiedName
  | BindingElement
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ThisExpression
  | SuperExpression
  | FunctionExpression
  | ArrowFunction
  | PropertyAccessExpression
  | ElementAccessExpression
  | MetaProperty
  | DebuggerStatement
  | VariableStatement
  | ExpressionStatement
  | IfStatement
  | DoStatement
  | WhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | BreakStatement
  | ContinueStatement
  | ReturnStatement
  | WithStatement
  | SwitchStatement
  | LabeledStatement
  | ThrowStatement
  | TryStatement;
/**
 * @group Node Unions
 */
export type HasJSDoc =
  | AccessorDeclaration
  | ArrowFunction
  | BinaryExpression
  | Block
  | BreakStatement
  | CallSignatureDeclaration
  | CaseClause
  | ClassLikeDeclaration
  | ClassStaticBlockDeclaration
  | ConstructorDeclaration
  | ConstructorTypeNode
  | ConstructSignatureDeclaration
  | ContinueStatement
  | DebuggerStatement
  | DoStatement
  | ElementAccessExpression
  | EmptyStatement
  | EndOfFileToken
  | EnumDeclaration
  | EnumMember
  | ExportAssignment
  | ExportDeclaration
  | ExportSpecifier
  | ExpressionStatement
  | ForInStatement
  | ForOfStatement
  | ForStatement
  | FunctionDeclaration
  | FunctionExpression
  | FunctionTypeNode
  | Identifier
  | IfStatement
  | ImportDeclaration
  | ImportEqualsDeclaration
  | IndexSignatureDeclaration
  | InterfaceDeclaration
  | JSDocFunctionType
  | JSDocSignature
  | LabeledStatement
  | MethodDeclaration
  | MethodSignature
  | ModuleDeclaration
  | NamedTupleMember
  | NamespaceExportDeclaration
  | ObjectLiteralExpression
  | ParameterDeclaration
  | ParenthesizedExpression
  | PropertyAccessExpression
  | PropertyAssignment
  | PropertyDeclaration
  | PropertySignature
  | ReturnStatement
  | SemicolonClassElement
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | TypeAliasDeclaration
  | TypeParameterDeclaration
  | VariableDeclaration
  | VariableStatement
  | WhileStatement
  | WithStatement;
/**
 * @group Node Unions
 */
export type AccessorDeclaration =
  | GetAccessorDeclaration
  | SetAccessorDeclaration;
/**
 * @group Node Types
 */
export interface ArrowFunction {
  readonly kind: 'ArrowFunction';
  readonly modifiers?: NodeArray<Modifier>;
  readonly equalsGreaterThanToken: EqualsGreaterThanToken;
  readonly body: ConciseBody;
  readonly name: never;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BinaryExpression {
  readonly kind: 'BinaryExpression';
  readonly left: Expression;
  readonly operatorToken: BinaryOperatorToken;
  readonly right: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface Block {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BreakStatement {
  readonly kind: 'BreakStatement';
  readonly label?: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CallSignatureDeclaration {
  readonly kind: 'CallSignature';
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CaseClause {
  readonly kind: 'CaseClause';
  readonly expression: Expression;
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
/**
 * @group Node Types
 */
export interface ClassStaticBlockDeclaration {
  readonly kind: 'ClassStaticBlockDeclaration';
  readonly body: Block;
  readonly name?: PropertyName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ConstructorDeclaration {
  readonly kind: 'Constructor';
  readonly modifiers?: NodeArray<ModifierLike> | undefined;
  readonly body?: FunctionBody | undefined;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ConstructorTypeNode {
  readonly kind: 'ConstructorType';
  readonly modifiers?: NodeArray<Modifier>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ConstructSignatureDeclaration {
  readonly kind: 'ConstructSignature';
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ContinueStatement {
  readonly kind: 'ContinueStatement';
  readonly label?: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DebuggerStatement {
  readonly kind: 'DebuggerStatement';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DoStatement {
  readonly kind: 'DoStatement';
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ElementAccessExpression {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EmptyStatement {
  readonly kind: 'EmptyStatement';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EndOfFileToken {
  readonly kind: 'EndOfFileToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EnumDeclaration {
  readonly kind: 'EnumDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly members: NodeArray<EnumMember>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EnumMember {
  readonly kind: 'EnumMember';
  readonly name: PropertyName;
  readonly initializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExportAssignment {
  readonly kind: 'ExportAssignment';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly isExportEquals?: boolean;
  readonly expression: Expression;
  readonly name?: Identifier | StringLiteral | NumericLiteral;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExportDeclaration {
  readonly kind: 'ExportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly isTypeOnly: boolean;
  readonly exportClause?: NamedExportBindings;
  readonly moduleSpecifier?: Expression;
  readonly assertClause?: AssertClause;
  readonly name?: Identifier | StringLiteral | NumericLiteral;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExportSpecifier {
  readonly kind: 'ExportSpecifier';
  readonly isTypeOnly: boolean;
  readonly propertyName?: Identifier;
  readonly name: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExpressionStatement {
  readonly kind: 'ExpressionStatement';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ForInStatement {
  readonly kind: 'ForInStatement';
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ForOfStatement {
  readonly kind: 'ForOfStatement';
  readonly awaitModifier?: AwaitKeyword;
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ForStatement {
  readonly kind: 'ForStatement';
  readonly initializer?: ForInitializer;
  readonly condition?: Expression;
  readonly incrementor?: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FunctionDeclaration {
  readonly kind: 'FunctionDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly body?: FunctionBody;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FunctionExpression {
  readonly kind: 'FunctionExpression';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name?: Identifier;
  readonly body: FunctionBody;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FunctionTypeNode {
  readonly kind: 'FunctionType';
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface Identifier {
  readonly kind: 'Identifier';
  readonly text: string;
  readonly originalKeywordKind?: SyntaxKind;
  readonly isInJSDocNamespace?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IfStatement {
  readonly kind: 'IfStatement';
  readonly expression: Expression;
  readonly thenStatement: Statement;
  readonly elseStatement?: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportDeclaration {
  readonly kind: 'ImportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly importClause?: ImportClause;
  readonly moduleSpecifier: Expression;
  readonly assertClause?: AssertClause;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportEqualsDeclaration {
  readonly kind: 'ImportEqualsDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly isTypeOnly: boolean;
  readonly moduleReference: ModuleReference;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IndexSignatureDeclaration {
  readonly kind: 'IndexSignature';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface InterfaceDeclaration {
  readonly kind: 'InterfaceDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<TypeElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocFunctionType {
  readonly kind: 'JSDocFunctionType';
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocSignature {
  readonly kind: 'JSDocSignature';
  readonly typeParameters?: readonly JSDocTemplateTag[];
  readonly parameters: readonly JSDocParameterTag[];
  readonly type: JSDocReturnTag | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface LabeledStatement {
  readonly kind: 'LabeledStatement';
  readonly label: Identifier;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MethodDeclaration {
  readonly kind: 'MethodDeclaration';
  readonly modifiers?: NodeArray<ModifierLike> | undefined;
  readonly name: PropertyName;
  readonly body?: FunctionBody | undefined;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MethodSignature {
  readonly kind: 'MethodSignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ModuleDeclaration {
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: ModuleName;
  readonly body?: ModuleBody | JSDocNamespaceDeclaration;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NamedTupleMember {
  readonly kind: 'NamedTupleMember';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: Identifier;
  readonly questionToken?: QuestionToken;
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NamespaceExportDeclaration {
  readonly kind: 'NamespaceExportDeclaration';
  readonly name: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ObjectLiteralExpression {
  readonly kind: 'ObjectLiteralExpression';
  readonly properties: NodeArray<ObjectLiteralElementLike>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ParameterDeclaration {
  readonly kind: 'Parameter';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ParenthesizedExpression {
  readonly kind: 'ParenthesizedExpression';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PropertyAccessExpression {
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PropertyAssignment {
  readonly kind: 'PropertyAssignment';
  readonly name: PropertyName;
  readonly initializer: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PropertySignature {
  readonly kind: 'PropertySignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ReturnStatement {
  readonly kind: 'ReturnStatement';
  readonly expression?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SemicolonClassElement {
  readonly kind: 'SemicolonClassElement';
  readonly name?: PropertyName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ShorthandPropertyAssignment {
  readonly kind: 'ShorthandPropertyAssignment';
  readonly name: Identifier;
  readonly equalsToken?: EqualsToken;
  readonly objectAssignmentInitializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SpreadAssignment {
  readonly kind: 'SpreadAssignment';
  readonly expression: Expression;
  readonly name?: PropertyName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SwitchStatement {
  readonly kind: 'SwitchStatement';
  readonly expression: Expression;
  readonly caseBlock: CaseBlock;
  possiblyExhaustive?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ThrowStatement {
  readonly kind: 'ThrowStatement';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TryStatement {
  readonly kind: 'TryStatement';
  readonly tryBlock: Block;
  readonly catchClause?: CatchClause;
  readonly finallyBlock?: Block;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeAliasDeclaration {
  readonly kind: 'TypeAliasDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeParameterDeclaration {
  readonly kind: 'TypeParameter';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: Identifier;
  readonly constraint?: TypeNode;
  readonly default?: TypeNode;
  expression?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface VariableDeclaration {
  readonly kind: 'VariableDeclaration';
  readonly name: BindingName;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface VariableStatement {
  readonly kind: 'VariableStatement';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly declarationList: VariableDeclarationList;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface WhileStatement {
  readonly kind: 'WhileStatement';
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface WithStatement {
  readonly kind: 'WithStatement';
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type HasType =
  | SignatureDeclaration
  | VariableDeclaration
  | ParameterDeclaration
  | PropertySignature
  | PropertyDeclaration
  | TypePredicateNode
  | ParenthesizedTypeNode
  | TypeOperatorNode
  | MappedTypeNode
  | AssertionExpression
  | TypeAliasDeclaration
  | JSDocTypeExpression
  | JSDocNonNullableType
  | JSDocNullableType
  | JSDocOptionalType
  | JSDocVariadicType;
/**
 * @group Node Unions
 */
export type SignatureDeclaration =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | MethodSignature
  | IndexSignatureDeclaration
  | FunctionTypeNode
  | ConstructorTypeNode
  | JSDocFunctionType
  | FunctionDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | AccessorDeclaration
  | FunctionExpression
  | ArrowFunction;
/**
 * @group Node Types
 */
export interface TypePredicateNode {
  readonly kind: 'TypePredicate';
  readonly assertsModifier?: AssertsKeyword;
  readonly parameterName: Identifier | ThisTypeNode;
  readonly type?: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ParenthesizedTypeNode {
  readonly kind: 'ParenthesizedType';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeOperatorNode {
  readonly kind: 'TypeOperator';
  readonly operator: 'KeyOfKeyword' | 'UniqueKeyword' | 'ReadonlyKeyword';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MappedTypeNode {
  readonly kind: 'MappedType';
  readonly readonlyToken?: ReadonlyKeyword | PlusToken | MinusToken;
  readonly typeParameter: TypeParameterDeclaration;
  readonly nameType?: TypeNode;
  readonly questionToken?: QuestionToken | PlusToken | MinusToken;
  readonly type?: TypeNode;
  readonly members?: NodeArray<TypeElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type AssertionExpression = TypeAssertion | AsExpression;
/**
 * @group Node Types
 */
export interface JSDocTypeExpression {
  readonly kind: 'JSDocTypeExpression';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocNonNullableType {
  readonly kind: 'JSDocNonNullableType';
  readonly type: TypeNode;
  readonly postfix: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocNullableType {
  readonly kind: 'JSDocNullableType';
  readonly type: TypeNode;
  readonly postfix: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocOptionalType {
  readonly kind: 'JSDocOptionalType';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocVariadicType {
  readonly kind: 'JSDocVariadicType';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type HasTypeArguments =
  | CallExpression
  | NewExpression
  | TaggedTemplateExpression
  | JsxOpeningElement
  | JsxSelfClosingElement;
/**
 * @group Node Types
 */
export interface CallExpression {
  readonly kind: 'CallExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NewExpression {
  readonly kind: 'NewExpression';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments?: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TaggedTemplateExpression {
  readonly kind: 'TaggedTemplateExpression';
  readonly tag: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly template: TemplateLiteral;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxOpeningElement {
  readonly kind: 'JsxOpeningElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxSelfClosingElement {
  readonly kind: 'JsxSelfClosingElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type HasInitializer =
  | HasExpressionInitializer
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | JsxAttribute;
/**
 * @group Node Unions
 */
export type HasExpressionInitializer =
  | VariableDeclaration
  | ParameterDeclaration
  | BindingElement
  | PropertyDeclaration
  | PropertyAssignment
  | EnumMember;
/**
 * @group Node Types
 */
export interface JsxAttribute {
  readonly kind: 'JsxAttribute';
  readonly name: JsxAttributeName;
  readonly initializer?: JsxAttributeValue;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BindingElement {
  readonly kind: 'BindingElement';
  readonly propertyName?: PropertyName;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly initializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type HasDecorators =
  | ParameterDeclaration
  | PropertyDeclaration
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ClassExpression
  | ClassDeclaration;
/**
 * @group Node Types
 */
export interface GetAccessorDeclaration {
  readonly kind: 'GetAccessor';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly body?: FunctionBody;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SetAccessorDeclaration {
  readonly kind: 'SetAccessor';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly body?: FunctionBody;
  readonly asteriskToken?: AsteriskToken | undefined;
  readonly questionToken?: QuestionToken | undefined;
  readonly exclamationToken?: ExclamationToken | undefined;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ClassExpression {
  readonly kind: 'ClassExpression';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ClassDeclaration {
  readonly kind: 'ClassDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type HasModifiers =
  | TypeParameterDeclaration
  | ParameterDeclaration
  | ConstructorTypeNode
  | PropertySignature
  | PropertyDeclaration
  | MethodSignature
  | MethodDeclaration
  | ConstructorDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration
  | FunctionExpression
  | ArrowFunction
  | ClassExpression
  | VariableStatement
  | FunctionDeclaration
  | ClassDeclaration
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | EnumDeclaration
  | ModuleDeclaration
  | ImportEqualsDeclaration
  | ImportDeclaration
  | ExportAssignment
  | ExportDeclaration;
/**
 * @group Token Groups
 */
export type Token =
  | PunctuationToken
  | KeywordToken
  | BinaryOperatorToken
  | AssignmentOperatorToken
  | PunctuationSyntaxKindToken
  | KeywordSyntaxKindToken
  | QuestionQuestionToken
  | AsteriskAsteriskToken
  | ExponentiationOperatorToken
  | SlashToken
  | PercentToken
  | MultiplicativeOperatorToken
  | MultiplicativeOperatorOrHigherToken
  | AdditiveOperatorToken
  | AdditiveOperatorOrHigherToken
  | LessThanLessThanToken
  | GreaterThanGreaterThanToken
  | GreaterThanGreaterThanGreaterThanToken
  | ShiftOperatorToken
  | ShiftOperatorOrHigherToken
  | LessThanToken
  | LessThanEqualsToken
  | GreaterThanToken
  | GreaterThanEqualsToken
  | InstanceOfKeywordToken
  | RelationalOperatorToken
  | RelationalOperatorOrHigherToken
  | EqualsEqualsToken
  | EqualsEqualsEqualsToken
  | ExclamationEqualsEqualsToken
  | ExclamationEqualsToken
  | EqualityOperatorToken
  | EqualityOperatorOrHigherToken
  | AmpersandToken
  | BarToken
  | CaretToken
  | BitwiseOperatorToken
  | BitwiseOperatorOrHigherToken
  | AmpersandAmpersandToken
  | BarBarToken
  | LogicalOperatorToken
  | LogicalOperatorOrHigherToken
  | PlusEqualsToken
  | MinusEqualsToken
  | AsteriskAsteriskEqualsToken
  | AsteriskEqualsToken
  | SlashEqualsToken
  | PercentEqualsToken
  | AmpersandEqualsToken
  | BarEqualsToken
  | CaretEqualsToken
  | LessThanLessThanEqualsToken
  | GreaterThanGreaterThanGreaterThanEqualsToken
  | GreaterThanGreaterThanEqualsToken
  | CompoundAssignmentOperatorToken
  | AssignmentOperatorOrHigherToken
  | CommaToken
  | OpenBraceToken
  | CloseBraceToken
  | OpenParenToken
  | CloseParenToken
  | OpenBracketToken
  | CloseBracketToken
  | SemicolonToken
  | LessThanSlashToken
  | PlusPlusToken
  | MinusMinusToken
  | TildeToken
  | AtToken
  | BacktickToken
  | HashToken
  | AsKeywordToken
  | BreakKeywordToken
  | CatchKeywordToken
  | ClassKeywordToken
  | ConstructorKeywordToken
  | ContinueKeywordToken
  | DebuggerKeywordToken
  | DeleteKeywordToken
  | DoKeywordToken
  | ElseKeywordToken
  | EnumKeywordToken
  | ExtendsKeywordToken
  | FalseKeywordToken
  | FinallyKeywordToken
  | ForKeywordToken
  | FromKeywordToken
  | FunctionKeywordToken
  | GetKeywordToken
  | GlobalKeywordToken
  | IfKeywordToken
  | ImplementsKeywordToken
  | ImportKeywordToken
  | InferKeywordToken
  | InterfaceKeywordToken
  | IsKeywordToken
  | KeyOfKeywordToken
  | LetKeywordToken
  | ModuleKeywordToken
  | NamespaceKeywordToken
  | NewKeywordToken
  | NullKeywordToken
  | OfKeywordToken
  | PackageKeywordToken
  | RequireKeywordToken
  | ReturnKeywordToken
  | SatisfiesKeywordToken
  | SetKeywordToken
  | SuperKeywordToken
  | SwitchKeywordToken
  | ThisKeywordToken
  | ThrowKeywordToken
  | TrueKeywordToken
  | TryKeywordToken
  | TypeKeywordToken
  | TypeOfKeywordToken
  | UniqueKeywordToken
  | VarKeywordToken
  | WhileKeywordToken
  | WithKeywordToken
  | YieldKeywordToken;
/**
 * @group Token Groups
 */
export type PunctuationToken =
  | DotToken
  | DotDotDotToken
  | QuestionToken
  | ExclamationToken
  | ColonToken
  | EqualsToken
  | AmpersandAmpersandEqualsToken
  | BarBarEqualsToken
  | QuestionQuestionEqualsToken
  | AsteriskToken
  | EqualsGreaterThanToken
  | PlusToken
  | MinusToken
  | QuestionDotToken;
/**
 * @group Node Types
 */
export interface DotToken {
  readonly kind: 'DotToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DotDotDotToken {
  readonly kind: 'DotDotDotToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface QuestionToken {
  readonly kind: 'QuestionToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExclamationToken {
  readonly kind: 'ExclamationToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ColonToken {
  readonly kind: 'ColonToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EqualsToken {
  readonly kind: 'EqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AmpersandAmpersandEqualsToken {
  readonly kind: 'AmpersandAmpersandEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BarBarEqualsToken {
  readonly kind: 'BarBarEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface QuestionQuestionEqualsToken {
  readonly kind: 'QuestionQuestionEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AsteriskToken {
  readonly kind: 'AsteriskToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EqualsGreaterThanToken {
  readonly kind: 'EqualsGreaterThanToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PlusToken {
  readonly kind: 'PlusToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MinusToken {
  readonly kind: 'MinusToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface QuestionDotToken {
  readonly kind: 'QuestionDotToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Groups
 */
export type KeywordToken =
  | AssertsKeyword
  | AssertKeyword
  | AwaitKeyword
  | CaseKeyword
  | ModifierToken
  | KeywordTypeNode
  | ModifierSyntaxKindToken
  | KeywordTypeSyntaxKindToken
  | AnyKeywordToken
  | BigIntKeywordToken
  | BooleanKeywordToken
  | IntrinsicKeywordToken
  | NeverKeywordToken
  | NumberKeywordToken
  | ObjectKeywordToken
  | StringKeywordToken
  | SymbolKeywordToken
  | UndefinedKeywordToken
  | UnknownKeywordToken
  | VoidKeywordToken;
/**
 * @group Node Types
 */
export interface AssertsKeyword {
  readonly kind: 'AssertsKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AssertKeyword {
  readonly kind: 'AssertKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AwaitKeyword {
  readonly kind: 'AwaitKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CaseKeyword {
  readonly kind: 'CaseKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Groups
 */
export type ModifierToken =
  | AbstractKeyword
  | AccessorKeyword
  | AsyncKeyword
  | ConstKeyword
  | DeclareKeyword
  | DefaultKeyword
  | ExportKeyword
  | InKeyword
  | PrivateKeyword
  | ProtectedKeyword
  | PublicKeyword
  | ReadonlyKeyword
  | OutKeyword
  | OverrideKeyword
  | StaticKeyword;
/**
 * @group Node Types
 */
export interface AbstractKeyword {
  readonly kind: 'AbstractKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AccessorKeyword {
  readonly kind: 'AccessorKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AsyncKeyword {
  readonly kind: 'AsyncKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ConstKeyword {
  readonly kind: 'ConstKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DeclareKeyword {
  readonly kind: 'DeclareKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DefaultKeyword {
  readonly kind: 'DefaultKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExportKeyword {
  readonly kind: 'ExportKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface InKeyword {
  readonly kind: 'InKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PrivateKeyword {
  readonly kind: 'PrivateKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ProtectedKeyword {
  readonly kind: 'ProtectedKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PublicKeyword {
  readonly kind: 'PublicKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ReadonlyKeyword {
  readonly kind: 'ReadonlyKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface OutKeyword {
  readonly kind: 'OutKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface OverrideKeyword {
  readonly kind: 'OverrideKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface StaticKeyword {
  readonly kind: 'StaticKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type Modifier =
  | AbstractKeyword
  | AccessorKeyword
  | AsyncKeyword
  | ConstKeyword
  | DeclareKeyword
  | DefaultKeyword
  | ExportKeyword
  | InKeyword
  | PrivateKeyword
  | ProtectedKeyword
  | PublicKeyword
  | OutKeyword
  | OverrideKeyword
  | ReadonlyKeyword
  | StaticKeyword;
/**
 * @group Node Unions
 */
export type ModifierLike = Modifier | Decorator;
/**
 * @group Node Types
 */
export interface Decorator {
  readonly kind: 'Decorator';
  readonly expression: LeftHandSideExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type AccessibilityModifier =
  | PublicKeyword
  | PrivateKeyword
  | ProtectedKeyword;
/**
 * @group Node Unions
 */
export type ParameterPropertyModifier = AccessibilityModifier | ReadonlyKeyword;
/**
 * @group Node Unions
 */
export type ClassMemberModifier =
  | AccessibilityModifier
  | ReadonlyKeyword
  | StaticKeyword
  | AccessorKeyword;
/**
 * @group Node Groups
 */
export type PrimaryExpression =
  | Identifier
  | PrivateIdentifier
  | NullLiteral
  | TrueLiteral
  | FalseLiteral
  | ThisExpression
  | SuperExpression
  | ImportExpression
  | FunctionExpression
  | LiteralExpression
  | TemplateExpression
  | ParenthesizedExpression
  | ArrayLiteralExpression
  | ObjectLiteralExpressionBase
  | NewExpression
  | MetaProperty
  | JsxElement
  | JsxAttributes
  | JsxSelfClosingElement
  | JsxFragment
  | MissingDeclaration
  | ClassExpression;
/**
 * @group Node Groups
 */
export type Declaration =
  | Identifier
  | NamedDeclaration
  | TypeLiteralNode
  | NamedTupleMember
  | MappedTypeNode
  | StringLiteral
  | BinaryExpression
  | NoSubstitutionTemplateLiteral
  | NumericLiteral
  | ObjectLiteralExpressionBase
  | ElementAccessExpression
  | CallExpression
  | NewExpression
  | JsxAttributes
  | JsxAttribute
  | JSDocEnumTag
  | JSDocSignature
  | JSDocPropertyLikeTag
  | JSDocTypeLiteral
  | SourceFile;
/**
 * @group Node Types
 */
export interface QualifiedName {
  readonly kind: 'QualifiedName';
  readonly left: EntityName;
  readonly right: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type EntityName = Identifier | QualifiedName;
/**
 * @group Node Unions
 */
export type PropertyName =
  | Identifier
  | StringLiteral
  | NumericLiteral
  | ComputedPropertyName
  | PrivateIdentifier;
/**
 * @group Node Types
 */
export interface StringLiteral {
  readonly kind: 'StringLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NumericLiteral {
  readonly kind: 'NumericLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ComputedPropertyName {
  readonly kind: 'ComputedPropertyName';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PrivateIdentifier {
  readonly kind: 'PrivateIdentifier';
  readonly text: string;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type MemberName = Identifier | PrivateIdentifier;
/**
 * @group Node Unions
 */
export type DeclarationName =
  | PropertyName
  | JsxAttributeName
  | StringLiteralLike
  | ElementAccessExpression
  | BindingPattern
  | EntityNameExpression;
/**
 * @group Node Unions
 */
export type JsxAttributeName = Identifier | JsxNamespacedName;
/**
 * @group Node Unions
 */
export type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
/**
 * @group Node Unions
 */
export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
/**
 * @group Node Unions
 */
export type EntityNameExpression =
  | Identifier
  | PropertyAccessEntityNameExpression;
/**
 * @group Node Groups
 */
export type NamedDeclaration =
  | DeclarationStatement
  | TypeParameterDeclaration
  | SignatureDeclarationBase
  | VariableDeclaration
  | ParameterDeclaration
  | BindingElement
  | ObjectLiteralElement
  | PropertyAccessExpression
  | ClassLikeDeclarationBase
  | ClassElement
  | TypeElement
  | EnumMember
  | ImportClause
  | NamespaceImport
  | NamespaceExport
  | ImportSpecifier
  | ExportSpecifier
  | JSDocTypedefTag
  | JSDocCallbackTag;
/**
 * @group Node Groups
 */
export type DeclarationStatement =
  | FunctionDeclaration
  | MissingDeclaration
  | ClassDeclaration
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | EnumDeclaration
  | ModuleDeclaration
  | ImportEqualsDeclaration
  | NamespaceExportDeclaration
  | ExportDeclaration
  | ExportAssignment;
/**
 * @group Node Groups
 */
export type Statement =
  | DeclarationStatement
  | NotEmittedStatement
  | EmptyStatement
  | DebuggerStatement
  | Block
  | VariableStatement
  | ExpressionStatement
  | IfStatement
  | IterationStatement
  | BreakStatement
  | ContinueStatement
  | ReturnStatement
  | WithStatement
  | SwitchStatement
  | LabeledStatement
  | ThrowStatement
  | TryStatement
  | ModuleBlock
  | ImportDeclaration;
/**
 * @group Node Groups
 */
export type Expression =
  | OmittedExpression
  | UnaryExpression
  | YieldExpression
  | BinaryExpression
  | ConditionalExpression
  | ArrowFunction
  | SpreadElement
  | AsExpression
  | SatisfiesExpression
  | JsxOpeningElement
  | JsxOpeningFragment
  | JsxClosingFragment
  | JsxExpression
  | CommaListExpression;
/**
 * @group Node Groups
 */
export type LeftHandSideExpression =
  | PartiallyEmittedExpression
  | MemberExpression
  | CallExpression
  | NonNullExpression;
/**
 * @group Node Groups
 */
export type TypeNode =
  | KeywordTypeNode
  | ThisTypeNode
  | FunctionOrConstructorTypeNodeBase
  | NodeWithTypeArguments
  | TypePredicateNode
  | TypeLiteralNode
  | ArrayTypeNode
  | TupleTypeNode
  | NamedTupleMember
  | OptionalTypeNode
  | RestTypeNode
  | UnionTypeNode
  | IntersectionTypeNode
  | ConditionalTypeNode
  | InferTypeNode
  | ParenthesizedTypeNode
  | TypeOperatorNode
  | IndexedAccessTypeNode
  | MappedTypeNode
  | LiteralTypeNode
  | TemplateLiteralTypeNode
  | TemplateLiteralTypeSpan
  | JSDocTypeExpression
  | JSDocType;
/**
 * @group Node Groups
 */
export type SignatureDeclarationBase =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | FunctionLikeDeclarationBase
  | MethodSignature
  | IndexSignatureDeclaration
  | FunctionOrConstructorTypeNodeBase
  | JSDocFunctionType;
/**
 * @group Node Groups
 */
export type TypeElement =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | PropertySignature
  | MethodSignature
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration;
/**
 * @group Node Unions
 */
export type BindingName = Identifier | BindingPattern;
/**
 * @group Node Types
 */
export interface VariableDeclarationList {
  readonly kind: 'VariableDeclarationList';
  readonly declarations: NodeArray<VariableDeclaration>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type ClassElement =
  | PropertyDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | SemicolonClassElement
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration
  | ClassStaticBlockDeclaration;
/**
 * @group Node Types
 */
export interface AutoAccessorPropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type ObjectLiteralElement =
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | JsxSpreadAttribute;
/**
 * @group Node Unions
 */
export type ObjectLiteralElementLike =
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | AccessorDeclaration;
/**
 * @group Node Unions
 */
export type VariableLikeDeclaration =
  | VariableDeclaration
  | ParameterDeclaration
  | BindingElement
  | PropertyDeclaration
  | PropertyAssignment
  | PropertySignature
  | JsxAttribute
  | ShorthandPropertyAssignment
  | EnumMember
  | JSDocPropertyTag
  | JSDocParameterTag;
/**
 * @group Node Types
 */
export interface JSDocPropertyTag {
  readonly kind: 'JSDocPropertyTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly isNameFirst: boolean;
  readonly isBracketed: boolean;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocParameterTag {
  readonly kind: 'JSDocParameterTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly isNameFirst: boolean;
  readonly isBracketed: boolean;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ObjectBindingPattern {
  readonly kind: 'ObjectBindingPattern';
  readonly elements: NodeArray<BindingElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ArrayBindingPattern {
  readonly kind: 'ArrayBindingPattern';
  readonly elements: NodeArray<ArrayBindingElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type ArrayBindingElement = BindingElement | OmittedExpression;
/**
 * @group Node Types
 */
export interface OmittedExpression {
  readonly kind: 'OmittedExpression';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type FunctionLikeDeclarationBase =
  | FunctionDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | FunctionExpression
  | ArrowFunction;
/**
 * @group Node Unions
 */
export type FunctionLikeDeclaration =
  | FunctionDeclaration
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ConstructorDeclaration
  | FunctionExpression
  | ArrowFunction;
/**
 * @group Node Types
 */
export interface FunctionBody {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Groups
 */
export type KeywordTypeNode =
  | AnyKeywordToken
  | BigIntKeywordToken
  | BooleanKeywordToken
  | IntrinsicKeywordToken
  | NeverKeywordToken
  | NumberKeywordToken
  | ObjectKeywordToken
  | StringKeywordToken
  | SymbolKeywordToken
  | UndefinedKeywordToken
  | UnknownKeywordToken
  | VoidKeywordToken;
/**
 * @group Node Types
 */
export interface ImportTypeAssertionContainer {
  readonly kind: 'ImportTypeAssertionContainer';
  readonly assertClause: AssertClause;
  readonly multiLine?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AssertClause {
  readonly kind: 'AssertClause';
  readonly elements: NodeArray<AssertEntry>;
  readonly multiLine?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportTypeNode {
  readonly kind: 'ImportType';
  readonly isTypeOf: boolean;
  readonly argument: TypeNode;
  readonly assertions?: ImportTypeAssertionContainer;
  readonly qualifier?: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type NodeWithTypeArguments =
  | ImportTypeNode
  | TypeReferenceNode
  | TypeQueryNode
  | ExpressionWithTypeArguments;
/**
 * @group Node Types
 */
export interface ThisTypeNode {
  readonly kind: 'ThisType';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type FunctionOrConstructorTypeNode =
  | FunctionTypeNode
  | ConstructorTypeNode;
/**
 * @group Node Groups
 */
export type FunctionOrConstructorTypeNodeBase =
  | FunctionTypeNode
  | ConstructorTypeNode;
/**
 * @group Node Unions
 */
export type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
/**
 * @group Node Types
 */
export interface TypeReferenceNode {
  readonly kind: 'TypeReference';
  readonly typeName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExpressionWithTypeArguments {
  readonly kind: 'ExpressionWithTypeArguments';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeQueryNode {
  readonly kind: 'TypeQuery';
  readonly exprName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeLiteralNode {
  readonly kind: 'TypeLiteral';
  readonly members: NodeArray<TypeElement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ArrayTypeNode {
  readonly kind: 'ArrayType';
  readonly elementType: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TupleTypeNode {
  readonly kind: 'TupleType';
  readonly elements: NodeArray<TypeNode | NamedTupleMember>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface OptionalTypeNode {
  readonly kind: 'OptionalType';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface RestTypeNode {
  readonly kind: 'RestType';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
/**
 * @group Node Types
 */
export interface UnionTypeNode {
  readonly kind: 'UnionType';
  readonly types: NodeArray<TypeNode>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IntersectionTypeNode {
  readonly kind: 'IntersectionType';
  readonly types: NodeArray<TypeNode>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ConditionalTypeNode {
  readonly kind: 'ConditionalType';
  readonly checkType: TypeNode;
  readonly extendsType: TypeNode;
  readonly trueType: TypeNode;
  readonly falseType: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface InferTypeNode {
  readonly kind: 'InferType';
  readonly typeParameter: TypeParameterDeclaration;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IndexedAccessTypeNode {
  readonly kind: 'IndexedAccessType';
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface LiteralTypeNode {
  readonly kind: 'LiteralType';
  readonly literal:
    | NullLiteral
    | BooleanLiteral
    | LiteralExpression
    | PrefixUnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NullLiteral {
  readonly kind: 'NullKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type BooleanLiteral = TrueLiteral | FalseLiteral;
/**
 * @group Node Groups
 */
export type LiteralExpression =
  | StringLiteral
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral
  | NumericLiteral
  | BigIntLiteral;
/**
 * @group Node Types
 */
export interface PrefixUnaryExpression {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: PrefixUnaryOperator;
  readonly operand: UnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NoSubstitutionTemplateLiteral {
  readonly kind: 'NoSubstitutionTemplateLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  rawText?: string;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type PropertyNameLiteral =
  | Identifier
  | StringLiteralLike
  | NumericLiteral
  | JsxNamespacedName;
/**
 * @group Node Types
 */
export interface JsxNamespacedName {
  readonly kind: 'JsxNamespacedName';
  readonly name: Identifier;
  readonly namespace: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TemplateLiteralTypeNode {
  kind: 'TemplateLiteralType';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TemplateHead {
  readonly kind: 'TemplateHead';
  rawText?: string;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TemplateLiteralTypeSpan {
  readonly kind: 'TemplateLiteralTypeSpan';
  readonly type: TypeNode;
  readonly literal: TemplateMiddle | TemplateTail;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TemplateMiddle {
  readonly kind: 'TemplateMiddle';
  rawText?: string;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TemplateTail {
  readonly kind: 'TemplateTail';
  rawText?: string;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PartiallyEmittedExpression {
  readonly kind: 'PartiallyEmittedExpression';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type UnaryExpression =
  | UpdateExpression
  | DeleteExpression
  | TypeOfExpression
  | VoidExpression
  | AwaitExpression
  | TypeAssertion;
/**
 * @group Node Groups
 */
export type UpdateExpression =
  | PrefixUnaryExpression
  | PostfixUnaryExpression
  | LeftHandSideExpression;
/**
 * @group Node Kinds
 */
export type PrefixUnaryOperator =
  | 'PlusPlusToken'
  | 'MinusMinusToken'
  | 'PlusToken'
  | 'MinusToken'
  | 'TildeToken'
  | 'ExclamationToken';
/**
 * @group Node Kinds
 */
export type PostfixUnaryOperator = 'PlusPlusToken' | 'MinusMinusToken';
/**
 * @group Node Types
 */
export interface PostfixUnaryExpression {
  readonly kind: 'PostfixUnaryExpression';
  readonly operand: LeftHandSideExpression;
  readonly operator: PostfixUnaryOperator;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type MemberExpression =
  | PrimaryExpression
  | PropertyAccessExpression
  | ElementAccessExpression
  | ExpressionWithTypeArguments
  | TaggedTemplateExpression;
/**
 * @group Node Types
 */
export interface TrueLiteral {
  readonly kind: 'TrueKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FalseLiteral {
  readonly kind: 'FalseKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ThisExpression {
  readonly kind: 'ThisKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SuperExpression {
  readonly kind: 'SuperKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportExpression {
  readonly kind: 'ImportKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DeleteExpression {
  readonly kind: 'DeleteExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeOfExpression {
  readonly kind: 'TypeOfExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface VoidExpression {
  readonly kind: 'VoidExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AwaitExpression {
  readonly kind: 'AwaitExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface YieldExpression {
  readonly kind: 'YieldExpression';
  readonly asteriskToken?: AsteriskToken;
  readonly expression?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Kinds
 */
export type ExponentiationOperator = 'AsteriskAsteriskToken';
/**
 * @group Node Kinds
 */
export type MultiplicativeOperator =
  | 'AsteriskToken'
  | 'SlashToken'
  | 'PercentToken';
/**
 * @group Node Kinds
 */
export type MultiplicativeOperatorOrHigher =
  | ExponentiationOperator
  | MultiplicativeOperator;
/**
 * @group Node Kinds
 */
export type AdditiveOperator = 'PlusToken' | 'MinusToken';
/**
 * @group Node Kinds
 */
export type AdditiveOperatorOrHigher =
  | MultiplicativeOperatorOrHigher
  | AdditiveOperator;
/**
 * @group Node Kinds
 */
export type ShiftOperator =
  | 'LessThanLessThanToken'
  | 'GreaterThanGreaterThanToken'
  | 'GreaterThanGreaterThanGreaterThanToken';
/**
 * @group Node Kinds
 */
export type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
/**
 * @group Node Kinds
 */
export type RelationalOperator =
  | 'LessThanToken'
  | 'LessThanEqualsToken'
  | 'GreaterThanToken'
  | 'GreaterThanEqualsToken'
  | 'InstanceOfKeyword'
  | 'InKeyword';
/**
 * @group Node Kinds
 */
export type RelationalOperatorOrHigher =
  | ShiftOperatorOrHigher
  | RelationalOperator;
/**
 * @group Node Kinds
 */
export type EqualityOperator =
  | 'EqualsEqualsToken'
  | 'EqualsEqualsEqualsToken'
  | 'ExclamationEqualsEqualsToken'
  | 'ExclamationEqualsToken';
/**
 * @group Node Kinds
 */
export type EqualityOperatorOrHigher =
  | RelationalOperatorOrHigher
  | EqualityOperator;
/**
 * @group Node Kinds
 */
export type BitwiseOperator = 'AmpersandToken' | 'BarToken' | 'CaretToken';
/**
 * @group Node Kinds
 */
export type BitwiseOperatorOrHigher =
  | EqualityOperatorOrHigher
  | BitwiseOperator;
/**
 * @group Node Kinds
 */
export type LogicalOperator = 'AmpersandAmpersandToken' | 'BarBarToken';
/**
 * @group Node Kinds
 */
export type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
/**
 * @group Node Kinds
 */
export type CompoundAssignmentOperator =
  | 'PlusEqualsToken'
  | 'MinusEqualsToken'
  | 'AsteriskAsteriskEqualsToken'
  | 'AsteriskEqualsToken'
  | 'SlashEqualsToken'
  | 'PercentEqualsToken'
  | 'AmpersandEqualsToken'
  | 'BarEqualsToken'
  | 'CaretEqualsToken'
  | 'LessThanLessThanEqualsToken'
  | 'GreaterThanGreaterThanGreaterThanEqualsToken'
  | 'GreaterThanGreaterThanEqualsToken'
  | 'BarBarEqualsToken'
  | 'AmpersandAmpersandEqualsToken'
  | 'QuestionQuestionEqualsToken';
/**
 * @group Node Kinds
 */
export type AssignmentOperator = 'EqualsToken' | CompoundAssignmentOperator;
/**
 * @group Node Kinds
 */
export type AssignmentOperatorOrHigher =
  | 'QuestionQuestionToken'
  | LogicalOperatorOrHigher
  | AssignmentOperator;
/**
 * @group Node Kinds
 */
export type BinaryOperator = AssignmentOperatorOrHigher | 'CommaToken';
/**
 * @group Token Instances
 */
export type BinaryOperatorToken = AssignmentOperatorOrHigherToken | CommaToken;
/**
 * @group Token Instances
 */
export type AssignmentOperatorToken =
  | EqualsToken
  | CompoundAssignmentOperatorToken;
/**
 * @group Node Types
 */
export interface AssignmentExpression<
  TOperator extends AssignmentOperatorToken,
> {
  readonly left: LeftHandSideExpression;
  readonly operatorToken: TOperator;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ObjectDestructuringAssignment {
  readonly left: ObjectLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ArrayDestructuringAssignment {
  readonly left: ArrayLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ArrayLiteralExpression {
  readonly kind: 'ArrayLiteralExpression';
  readonly elements: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type DestructuringAssignment =
  | ObjectDestructuringAssignment
  | ArrayDestructuringAssignment;
/**
 * @group Node Unions
 */
export type BindingOrAssignmentElement =
  | VariableDeclaration
  | ParameterDeclaration
  | ObjectBindingOrAssignmentElement
  | ArrayBindingOrAssignmentElement;
/**
 * @group Node Unions
 */
export type ObjectBindingOrAssignmentElement =
  | BindingElement
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment;
/**
 * @group Node Unions
 */
export type ArrayBindingOrAssignmentElement =
  | BindingElement
  | OmittedExpression
  | SpreadElement
  | ArrayLiteralExpression
  | ObjectLiteralExpression
  | AssignmentExpression<EqualsToken>
  | Identifier
  | PropertyAccessExpression
  | ElementAccessExpression;
/**
 * @group Node Types
 */
export interface SpreadElement {
  readonly kind: 'SpreadElement';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type BindingOrAssignmentElementRestIndicator =
  | DotDotDotToken
  | SpreadElement
  | SpreadAssignment;
/**
 * @group Node Unions
 */
export type BindingOrAssignmentElementTarget =
  | BindingOrAssignmentPattern
  | Identifier
  | PropertyAccessExpression
  | ElementAccessExpression
  | OmittedExpression;
/**
 * @group Node Unions
 */
export type BindingOrAssignmentPattern =
  | ObjectBindingOrAssignmentPattern
  | ArrayBindingOrAssignmentPattern;
/**
 * @group Node Unions
 */
export type ObjectBindingOrAssignmentPattern =
  | ObjectBindingPattern
  | ObjectLiteralExpression;
/**
 * @group Node Unions
 */
export type ArrayBindingOrAssignmentPattern =
  | ArrayBindingPattern
  | ArrayLiteralExpression;
/**
 * @group Node Unions
 */
export type AssignmentPattern =
  | ObjectLiteralExpression
  | ArrayLiteralExpression;
/**
 * @group Node Types
 */
export interface ConditionalExpression {
  readonly kind: 'ConditionalExpression';
  readonly condition: Expression;
  readonly questionToken: QuestionToken;
  readonly whenTrue: Expression;
  readonly colonToken: ColonToken;
  readonly whenFalse: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type ConciseBody = FunctionBody | Expression;
/**
 * @group Node Groups
 */
export type LiteralLikeNode =
  | TemplateLiteralLikeNode
  | LiteralExpression
  | JsxText;
/**
 * @group Node Groups
 */
export type TemplateLiteralLikeNode =
  | NoSubstitutionTemplateLiteral
  | TemplateHead
  | TemplateMiddle
  | TemplateTail;
/**
 * @group Node Types
 */
export interface RegularExpressionLiteral {
  readonly kind: 'RegularExpressionLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BigIntLiteral {
  readonly kind: 'BigIntLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type LiteralToken =
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | JsxText
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral;
/**
 * @group Node Types
 */
export interface JsxText {
  readonly kind: 'JsxText';
  readonly containsOnlyTriviaWhiteSpaces: boolean;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type PseudoLiteralToken = TemplateHead | TemplateMiddle | TemplateTail;
/**
 * @group Node Unions
 */
export type TemplateLiteralToken =
  | NoSubstitutionTemplateLiteral
  | PseudoLiteralToken;
/**
 * @group Node Types
 */
export interface TemplateExpression {
  readonly kind: 'TemplateExpression';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateSpan>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TemplateSpan {
  readonly kind: 'TemplateSpan';
  readonly expression: Expression;
  readonly literal: TemplateMiddle | TemplateTail;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type TemplateLiteral =
  | TemplateExpression
  | NoSubstitutionTemplateLiteral;
/**
 * @group Node Groups
 */
export type ObjectLiteralExpressionBase = ObjectLiteralExpression;
/**
 * @group Node Types
 */
export interface PropertyAccessEntityNameExpression {
  readonly expression: EntityNameExpression;
  readonly name: Identifier;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type EntityNameOrEntityNameExpression =
  | EntityName
  | EntityNameExpression;
/**
 * @group Node Unions
 */
export type AccessExpression =
  | PropertyAccessExpression
  | ElementAccessExpression;
/**
 * @group Node Types
 */
export interface PropertyAccessChain {
  readonly name: MemberName;
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SuperPropertyAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ElementAccessChain {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SuperElementAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'ElementAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type SuperProperty =
  | SuperPropertyAccessExpression
  | SuperElementAccessExpression;
/**
 * @group Node Types
 */
export interface CallChain {
  readonly kind: 'CallExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type OptionalChain =
  | PropertyAccessChain
  | ElementAccessChain
  | CallChain
  | NonNullChain;
/**
 * @group Node Types
 */
export interface NonNullChain {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SuperCall {
  readonly expression: SuperExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportCall {
  readonly expression: ImportExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type CallLikeExpression =
  | CallExpression
  | NewExpression
  | TaggedTemplateExpression
  | Decorator
  | JsxOpeningLikeElement;
/**
 * @group Node Unions
 */
export type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
/**
 * @group Node Types
 */
export interface AsExpression {
  readonly kind: 'AsExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeAssertion {
  readonly kind: 'TypeAssertionExpression';
  readonly type: TypeNode;
  readonly expression: UnaryExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SatisfiesExpression {
  readonly kind: 'SatisfiesExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NonNullExpression {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MetaProperty {
  readonly kind: 'MetaProperty';
  readonly keywordToken: 'NewKeyword' | 'ImportKeyword';
  readonly name: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxElement {
  readonly kind: 'JsxElement';
  readonly openingElement: JsxOpeningElement;
  readonly children: NodeArray<JsxChild>;
  readonly closingElement: JsxClosingElement;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type JsxChild =
  | JsxText
  | JsxExpression
  | JsxElement
  | JsxSelfClosingElement
  | JsxFragment;
/**
 * @group Node Types
 */
export interface JsxClosingElement {
  readonly kind: 'JsxClosingElement';
  readonly tagName: JsxTagNameExpression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
/**
 * @group Node Types
 */
export interface JsxSpreadAttribute {
  readonly kind: 'JsxSpreadAttribute';
  readonly expression: Expression;
  readonly name?: PropertyName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type JsxTagNameExpression =
  | Identifier
  | ThisExpression
  | JsxTagNamePropertyAccess
  | JsxNamespacedName;
/**
 * @group Node Types
 */
export interface JsxTagNamePropertyAccess {
  readonly expression: Identifier | ThisExpression | JsxTagNamePropertyAccess;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxAttributes {
  readonly properties: NodeArray<JsxAttributeLike>;
  readonly kind: 'JsxAttributes';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxFragment {
  readonly kind: 'JsxFragment';
  readonly openingFragment: JsxOpeningFragment;
  readonly children: NodeArray<JsxChild>;
  readonly closingFragment: JsxClosingFragment;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxOpeningFragment {
  readonly kind: 'JsxOpeningFragment';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsxClosingFragment {
  readonly kind: 'JsxClosingFragment';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type JsxAttributeValue =
  | StringLiteral
  | JsxExpression
  | JsxElement
  | JsxSelfClosingElement
  | JsxFragment;
/**
 * @group Node Types
 */
export interface JsxExpression {
  readonly kind: 'JsxExpression';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly expression?: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NotEmittedStatement {
  readonly kind: 'NotEmittedStatement';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CommaListExpression {
  readonly kind: 'CommaListExpression';
  readonly elements: NodeArray<Expression>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MissingDeclaration {
  readonly kind: 'MissingDeclaration';
  readonly name?: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
/**
 * @group Node Types
 */
export interface SourceFile {
  readonly kind: 'SourceFile';
  readonly statements: NodeArray<Statement>;
  readonly endOfFileToken: EndOfFileToken;
  fileName: string;
  text: string;
  moduleName?: string;
  isDeclarationFile: boolean;
  hasNoDefaultLib: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ModuleBlock {
  readonly kind: 'ModuleBlock';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type CaseOrDefaultClause = CaseClause | DefaultClause;
/**
 * @group Node Groups
 */
export type IterationStatement =
  | DoStatement
  | WhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement;
/**
 * @group Node Unions
 */
export type ForInitializer = VariableDeclarationList | Expression;
/**
 * @group Node Unions
 */
export type ForInOrOfStatement = ForInStatement | ForOfStatement;
/**
 * @group Node Unions
 */
export type BreakOrContinueStatement = BreakStatement | ContinueStatement;
/**
 * @group Node Types
 */
export interface CaseBlock {
  readonly kind: 'CaseBlock';
  readonly clauses: NodeArray<CaseOrDefaultClause>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DefaultClause {
  readonly kind: 'DefaultClause';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CatchClause {
  readonly kind: 'CatchClause';
  readonly variableDeclaration?: VariableDeclaration;
  readonly block: Block;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type ObjectTypeDeclaration =
  | ClassLikeDeclaration
  | InterfaceDeclaration
  | TypeLiteralNode;
/**
 * @group Node Unions
 */
export type DeclarationWithTypeParameters =
  | DeclarationWithTypeParameterChildren
  | JSDocTypedefTag
  | JSDocCallbackTag
  | JSDocSignature;
/**
 * @group Node Unions
 */
export type DeclarationWithTypeParameterChildren =
  | SignatureDeclaration
  | ClassLikeDeclaration
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | JSDocTemplateTag;
/**
 * @group Node Types
 */
export interface JSDocTypedefTag {
  readonly kind: 'JSDocTypedefTag';
  readonly fullName?: JSDocNamespaceDeclaration | Identifier;
  readonly name?: Identifier;
  readonly typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocCallbackTag {
  readonly kind: 'JSDocCallbackTag';
  readonly fullName?: JSDocNamespaceDeclaration | Identifier;
  readonly name?: Identifier;
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocTemplateTag {
  readonly kind: 'JSDocTemplateTag';
  readonly constraint: JSDocTypeExpression | undefined;
  readonly typeParameters: NodeArray<TypeParameterDeclaration>;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type ClassLikeDeclarationBase = ClassDeclaration | ClassExpression;
/**
 * @group Node Types
 */
export interface HeritageClause {
  readonly kind: 'HeritageClause';
  readonly token: 'ExtendsKeyword' | 'ImplementsKeyword';
  readonly types: NodeArray<ExpressionWithTypeArguments>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type ModuleName = Identifier | StringLiteral;
/**
 * @group Node Unions
 */
export type ModuleBody = NamespaceBody | JSDocNamespaceBody;
/**
 * @group Node Unions
 */
export type NamespaceBody = ModuleBlock | NamespaceDeclaration;
/**
 * @group Node Unions
 */
export type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
/**
 * @group Node Types
 */
export interface JSDocNamespaceDeclaration {
  readonly name: Identifier;
  readonly body?: JSDocNamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NamespaceDeclaration {
  readonly name: Identifier;
  readonly body: NamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type ModuleReference = EntityName | ExternalModuleReference;
/**
 * @group Node Types
 */
export interface ExternalModuleReference {
  readonly kind: 'ExternalModuleReference';
  readonly expression: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportClause {
  readonly kind: 'ImportClause';
  readonly isTypeOnly: boolean;
  readonly name?: Identifier;
  readonly namedBindings?: NamedImportBindings;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type NamedImportBindings = NamespaceImport | NamedImports;
/**
 * @group Node Types
 */
export interface NamespaceImport {
  readonly kind: 'NamespaceImport';
  readonly name: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NamedImports {
  readonly kind: 'NamedImports';
  readonly elements: NodeArray<ImportSpecifier>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type NamedExportBindings = NamespaceExport | NamedExports;
/**
 * @group Node Types
 */
export interface NamespaceExport {
  readonly kind: 'NamespaceExport';
  readonly name: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NamedExports {
  readonly kind: 'NamedExports';
  readonly elements: NodeArray<ExportSpecifier>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type AssertionKey = Identifier | StringLiteral;
/**
 * @group Node Types
 */
export interface AssertEntry {
  readonly kind: 'AssertEntry';
  readonly name: AssertionKey;
  readonly value: Expression;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportSpecifier {
  readonly kind: 'ImportSpecifier';
  readonly propertyName?: Identifier;
  readonly name: Identifier;
  readonly isTypeOnly: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type NamedImportsOrExports = NamedImports | NamedExports;
/**
 * @group Node Unions
 */
export type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
/**
 * @group Node Unions
 */
export type TypeOnlyCompatibleAliasDeclaration =
  | ImportClause
  | ImportEqualsDeclaration
  | NamespaceImport
  | ImportOrExportSpecifier
  | ExportDeclaration
  | NamespaceExport;
/**
 * @group Node Types
 */
export interface JSDocNameReference {
  readonly kind: 'JSDocNameReference';
  readonly name: EntityName | JSDocMemberName;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocMemberName {
  readonly kind: 'JSDocMemberName';
  readonly left: EntityName | JSDocMemberName;
  readonly right: Identifier;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type JSDocType =
  | JSDocAllType
  | JSDocUnknownType
  | JSDocNonNullableType
  | JSDocNullableType
  | JSDocOptionalType
  | JSDocFunctionType
  | JSDocVariadicType
  | JSDocNamepathType
  | JSDocSignature
  | JSDocTypeLiteral;
/**
 * @group Node Types
 */
export interface JSDocAllType {
  readonly kind: 'JSDocAllType';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocUnknownType {
  readonly kind: 'JSDocUnknownType';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocNamepathType {
  readonly kind: 'JSDocNamepathType';
  readonly type: TypeNode;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type JSDocTypeReferencingNode =
  | JSDocVariadicType
  | JSDocOptionalType
  | JSDocNullableType
  | JSDocNonNullableType;
/**
 * @group Node Types
 */
export interface JSDoc {
  readonly kind: 'JSDoc';
  readonly tags?: NodeArray<JSDocTag>;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type JSDocTag =
  | JSDocUnknownTag
  | JSDocAugmentsTag
  | JSDocImplementsTag
  | JSDocAuthorTag
  | JSDocDeprecatedTag
  | JSDocClassTag
  | JSDocPublicTag
  | JSDocPrivateTag
  | JSDocProtectedTag
  | JSDocReadonlyTag
  | JSDocOverrideTag
  | JSDocEnumTag
  | JSDocThisTag
  | JSDocTemplateTag
  | JSDocSeeTag
  | JSDocReturnTag
  | JSDocTypeTag
  | JSDocTypedefTag
  | JSDocCallbackTag
  | JSDocOverloadTag
  | JSDocThrowsTag
  | JSDocPropertyLikeTag
  | JSDocSatisfiesTag;
/**
 * @group Node Unions
 */
export type JSDocComment =
  | JSDocText
  | JSDocLink
  | JSDocLinkCode
  | JSDocLinkPlain;
/**
 * @group Node Types
 */
export interface JSDocLink {
  readonly kind: 'JSDocLink';
  readonly name?: EntityName | JSDocMemberName;
  text: string;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocLinkCode {
  readonly kind: 'JSDocLinkCode';
  readonly name?: EntityName | JSDocMemberName;
  text: string;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocLinkPlain {
  readonly kind: 'JSDocLinkPlain';
  readonly name?: EntityName | JSDocMemberName;
  text: string;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocText {
  readonly kind: 'JSDocText';
  text: string;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocUnknownTag {
  readonly kind: 'JSDocTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocAugmentsTag {
  readonly kind: 'JSDocAugmentsTag';
  readonly class: ExpressionWithTypeArguments & {
    readonly expression: Identifier | PropertyAccessEntityNameExpression;
  };
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocImplementsTag {
  readonly kind: 'JSDocImplementsTag';
  readonly class: ExpressionWithTypeArguments & {
    readonly expression: Identifier | PropertyAccessEntityNameExpression;
  };
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocAuthorTag {
  readonly kind: 'JSDocAuthorTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocDeprecatedTag {
  kind: 'JSDocDeprecatedTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocClassTag {
  readonly kind: 'JSDocClassTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocPublicTag {
  readonly kind: 'JSDocPublicTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocPrivateTag {
  readonly kind: 'JSDocPrivateTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocProtectedTag {
  readonly kind: 'JSDocProtectedTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocReadonlyTag {
  readonly kind: 'JSDocReadonlyTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocOverrideTag {
  readonly kind: 'JSDocOverrideTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocEnumTag {
  readonly kind: 'JSDocEnumTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocThisTag {
  readonly kind: 'JSDocThisTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocSeeTag {
  readonly kind: 'JSDocSeeTag';
  readonly name?: JSDocNameReference;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocReturnTag {
  readonly kind: 'JSDocReturnTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocTypeTag {
  readonly kind: 'JSDocTypeTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocTypeLiteral {
  readonly kind: 'JSDocTypeLiteral';
  readonly jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
  readonly isArrayType: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocOverloadTag {
  readonly kind: 'JSDocOverloadTag';
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JSDocThrowsTag {
  readonly kind: 'JSDocThrowsTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Groups
 */
export type JSDocPropertyLikeTag = JSDocPropertyTag | JSDocParameterTag;
/**
 * @group Node Types
 */
export interface JSDocSatisfiesTag {
  readonly kind: 'JSDocSatisfiesTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsonSourceFile {
  readonly statements: NodeArray<JsonObjectExpressionStatement>;
  readonly kind: 'SourceFile';
  readonly endOfFileToken: EndOfFileToken;
  fileName: string;
  text: string;
  moduleName?: string;
  isDeclarationFile: boolean;
  hasNoDefaultLib: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsonObjectExpressionStatement {
  readonly expression: JsonObjectExpression;
  readonly kind: 'ExpressionStatement';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TsConfigSourceFile {
  extendedSourceFiles?: string[];
  readonly statements: NodeArray<JsonObjectExpressionStatement>;
  readonly kind: 'SourceFile';
  readonly endOfFileToken: EndOfFileToken;
  fileName: string;
  text: string;
  moduleName?: string;
  isDeclarationFile: boolean;
  hasNoDefaultLib: boolean;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface JsonMinusNumericLiteral {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: 'MinusToken';
  readonly operand: NumericLiteral;
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Unions
 */
export type JsonObjectExpression =
  | ObjectLiteralExpression
  | ArrayLiteralExpression
  | JsonMinusNumericLiteral
  | NumericLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral;
/**
 * @group Node Unions
 */
export type DestructuringPattern =
  | BindingPattern
  | ObjectLiteralExpression
  | ArrayLiteralExpression;
/**
 * @group Node Types
 */
export interface SyntaxList {
  kind: 'SyntaxList';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type PunctuationSyntaxKindToken =
  | OpenBraceToken
  | CloseBraceToken
  | OpenParenToken
  | CloseParenToken
  | OpenBracketToken
  | CloseBracketToken
  | DotToken
  | DotDotDotToken
  | SemicolonToken
  | CommaToken
  | QuestionDotToken
  | LessThanToken
  | LessThanSlashToken
  | GreaterThanToken
  | LessThanEqualsToken
  | GreaterThanEqualsToken
  | EqualsEqualsToken
  | ExclamationEqualsToken
  | EqualsEqualsEqualsToken
  | ExclamationEqualsEqualsToken
  | EqualsGreaterThanToken
  | PlusToken
  | MinusToken
  | AsteriskToken
  | AsteriskAsteriskToken
  | SlashToken
  | PercentToken
  | PlusPlusToken
  | MinusMinusToken
  | LessThanLessThanToken
  | GreaterThanGreaterThanToken
  | GreaterThanGreaterThanGreaterThanToken
  | AmpersandToken
  | BarToken
  | CaretToken
  | ExclamationToken
  | TildeToken
  | AmpersandAmpersandToken
  | AmpersandAmpersandEqualsToken
  | BarBarToken
  | BarBarEqualsToken
  | QuestionQuestionToken
  | QuestionQuestionEqualsToken
  | QuestionToken
  | ColonToken
  | AtToken
  | BacktickToken
  | HashToken
  | EqualsToken
  | PlusEqualsToken
  | MinusEqualsToken
  | AsteriskEqualsToken
  | AsteriskAsteriskEqualsToken
  | SlashEqualsToken
  | PercentEqualsToken
  | LessThanLessThanEqualsToken
  | GreaterThanGreaterThanEqualsToken
  | GreaterThanGreaterThanGreaterThanEqualsToken
  | AmpersandEqualsToken
  | BarEqualsToken
  | CaretEqualsToken;
/**
 * @group Token Instances
 */
export type KeywordSyntaxKindToken =
  | AbstractKeyword
  | AccessorKeyword
  | AnyKeywordToken
  | AsKeywordToken
  | AssertsKeyword
  | AssertKeyword
  | AsyncKeyword
  | AwaitKeyword
  | BigIntKeywordToken
  | BooleanKeywordToken
  | BreakKeywordToken
  | CaseKeyword
  | CatchKeywordToken
  | ClassKeywordToken
  | ConstKeyword
  | ConstructorKeywordToken
  | ContinueKeywordToken
  | DebuggerKeywordToken
  | DeclareKeyword
  | DefaultKeyword
  | DeleteKeywordToken
  | DoKeywordToken
  | ElseKeywordToken
  | EnumKeywordToken
  | ExportKeyword
  | ExtendsKeywordToken
  | FalseKeywordToken
  | FinallyKeywordToken
  | ForKeywordToken
  | FromKeywordToken
  | FunctionKeywordToken
  | GetKeywordToken
  | GlobalKeywordToken
  | IfKeywordToken
  | ImplementsKeywordToken
  | ImportKeywordToken
  | InferKeywordToken
  | InKeyword
  | InstanceOfKeywordToken
  | InterfaceKeywordToken
  | IntrinsicKeywordToken
  | IsKeywordToken
  | KeyOfKeywordToken
  | LetKeywordToken
  | ModuleKeywordToken
  | NamespaceKeywordToken
  | NeverKeywordToken
  | NewKeywordToken
  | NullKeywordToken
  | NumberKeywordToken
  | ObjectKeywordToken
  | OfKeywordToken
  | PackageKeywordToken
  | PrivateKeyword
  | ProtectedKeyword
  | PublicKeyword
  | ReadonlyKeyword
  | OutKeyword
  | OverrideKeyword
  | RequireKeywordToken
  | ReturnKeywordToken
  | SatisfiesKeywordToken
  | SetKeywordToken
  | StaticKeyword
  | StringKeywordToken
  | SuperKeywordToken
  | SwitchKeywordToken
  | SymbolKeywordToken
  | ThisKeywordToken
  | ThrowKeywordToken
  | TrueKeywordToken
  | TryKeywordToken
  | TypeKeywordToken
  | TypeOfKeywordToken
  | UndefinedKeywordToken
  | UniqueKeywordToken
  | UnknownKeywordToken
  | VarKeywordToken
  | VoidKeywordToken
  | WhileKeywordToken
  | WithKeywordToken
  | YieldKeywordToken;
/**
 * @group Node Types
 */
export interface QuestionQuestionToken {
  readonly kind: 'QuestionQuestionToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AsteriskAsteriskToken {
  readonly kind: 'AsteriskAsteriskToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type ExponentiationOperatorToken = AsteriskAsteriskToken;
/**
 * @group Node Types
 */
export interface SlashToken {
  readonly kind: 'SlashToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PercentToken {
  readonly kind: 'PercentToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type MultiplicativeOperatorToken =
  | AsteriskToken
  | SlashToken
  | PercentToken;
/**
 * @group Token Instances
 */
export type MultiplicativeOperatorOrHigherToken =
  | ExponentiationOperatorToken
  | MultiplicativeOperatorToken;
/**
 * @group Token Instances
 */
export type AdditiveOperatorToken = PlusToken | MinusToken;
/**
 * @group Token Instances
 */
export type AdditiveOperatorOrHigherToken =
  | MultiplicativeOperatorOrHigherToken
  | AdditiveOperatorToken;
/**
 * @group Node Types
 */
export interface LessThanLessThanToken {
  readonly kind: 'LessThanLessThanToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GreaterThanGreaterThanToken {
  readonly kind: 'GreaterThanGreaterThanToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GreaterThanGreaterThanGreaterThanToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type ShiftOperatorToken =
  | LessThanLessThanToken
  | GreaterThanGreaterThanToken
  | GreaterThanGreaterThanGreaterThanToken;
/**
 * @group Token Instances
 */
export type ShiftOperatorOrHigherToken =
  | AdditiveOperatorOrHigherToken
  | ShiftOperatorToken;
/**
 * @group Node Types
 */
export interface LessThanToken {
  readonly kind: 'LessThanToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface LessThanEqualsToken {
  readonly kind: 'LessThanEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GreaterThanToken {
  readonly kind: 'GreaterThanToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GreaterThanEqualsToken {
  readonly kind: 'GreaterThanEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface InstanceOfKeywordToken {
  readonly kind: 'InstanceOfKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type RelationalOperatorToken =
  | LessThanToken
  | LessThanEqualsToken
  | GreaterThanToken
  | GreaterThanEqualsToken
  | InstanceOfKeywordToken
  | InKeyword;
/**
 * @group Token Instances
 */
export type RelationalOperatorOrHigherToken =
  | ShiftOperatorOrHigherToken
  | RelationalOperatorToken;
/**
 * @group Node Types
 */
export interface EqualsEqualsToken {
  readonly kind: 'EqualsEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EqualsEqualsEqualsToken {
  readonly kind: 'EqualsEqualsEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExclamationEqualsEqualsToken {
  readonly kind: 'ExclamationEqualsEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExclamationEqualsToken {
  readonly kind: 'ExclamationEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type EqualityOperatorToken =
  | EqualsEqualsToken
  | EqualsEqualsEqualsToken
  | ExclamationEqualsEqualsToken
  | ExclamationEqualsToken;
/**
 * @group Token Instances
 */
export type EqualityOperatorOrHigherToken =
  | RelationalOperatorOrHigherToken
  | EqualityOperatorToken;
/**
 * @group Node Types
 */
export interface AmpersandToken {
  readonly kind: 'AmpersandToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BarToken {
  readonly kind: 'BarToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CaretToken {
  readonly kind: 'CaretToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type BitwiseOperatorToken = AmpersandToken | BarToken | CaretToken;
/**
 * @group Token Instances
 */
export type BitwiseOperatorOrHigherToken =
  | EqualityOperatorOrHigherToken
  | BitwiseOperatorToken;
/**
 * @group Node Types
 */
export interface AmpersandAmpersandToken {
  readonly kind: 'AmpersandAmpersandToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BarBarToken {
  readonly kind: 'BarBarToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type LogicalOperatorToken = AmpersandAmpersandToken | BarBarToken;
/**
 * @group Token Instances
 */
export type LogicalOperatorOrHigherToken =
  | BitwiseOperatorOrHigherToken
  | LogicalOperatorToken;
/**
 * @group Node Types
 */
export interface PlusEqualsToken {
  readonly kind: 'PlusEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MinusEqualsToken {
  readonly kind: 'MinusEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AsteriskAsteriskEqualsToken {
  readonly kind: 'AsteriskAsteriskEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AsteriskEqualsToken {
  readonly kind: 'AsteriskEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SlashEqualsToken {
  readonly kind: 'SlashEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PercentEqualsToken {
  readonly kind: 'PercentEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AmpersandEqualsToken {
  readonly kind: 'AmpersandEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BarEqualsToken {
  readonly kind: 'BarEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CaretEqualsToken {
  readonly kind: 'CaretEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface LessThanLessThanEqualsToken {
  readonly kind: 'LessThanLessThanEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GreaterThanGreaterThanGreaterThanEqualsToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GreaterThanGreaterThanEqualsToken {
  readonly kind: 'GreaterThanGreaterThanEqualsToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type CompoundAssignmentOperatorToken =
  | PlusEqualsToken
  | MinusEqualsToken
  | AsteriskAsteriskEqualsToken
  | AsteriskEqualsToken
  | SlashEqualsToken
  | PercentEqualsToken
  | AmpersandEqualsToken
  | BarEqualsToken
  | CaretEqualsToken
  | LessThanLessThanEqualsToken
  | GreaterThanGreaterThanGreaterThanEqualsToken
  | GreaterThanGreaterThanEqualsToken
  | BarBarEqualsToken
  | AmpersandAmpersandEqualsToken
  | QuestionQuestionEqualsToken;
/**
 * @group Token Instances
 */
export type AssignmentOperatorOrHigherToken =
  | QuestionQuestionToken
  | LogicalOperatorOrHigherToken
  | AssignmentOperatorToken;
/**
 * @group Node Types
 */
export interface CommaToken {
  readonly kind: 'CommaToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Token Instances
 */
export type ModifierSyntaxKindToken =
  | AbstractKeyword
  | AccessorKeyword
  | AsyncKeyword
  | ConstKeyword
  | DeclareKeyword
  | DefaultKeyword
  | ExportKeyword
  | InKeyword
  | PrivateKeyword
  | ProtectedKeyword
  | PublicKeyword
  | ReadonlyKeyword
  | OutKeyword
  | OverrideKeyword
  | StaticKeyword;
/**
 * @group Token Instances
 */
export type KeywordTypeSyntaxKindToken =
  | AnyKeywordToken
  | BigIntKeywordToken
  | BooleanKeywordToken
  | IntrinsicKeywordToken
  | NeverKeywordToken
  | NumberKeywordToken
  | ObjectKeywordToken
  | StringKeywordToken
  | SymbolKeywordToken
  | UndefinedKeywordToken
  | UnknownKeywordToken
  | VoidKeywordToken;
/**
 * @group Node Types
 */
export interface OpenBraceToken {
  readonly kind: 'OpenBraceToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CloseBraceToken {
  readonly kind: 'CloseBraceToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface OpenParenToken {
  readonly kind: 'OpenParenToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CloseParenToken {
  readonly kind: 'CloseParenToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface OpenBracketToken {
  readonly kind: 'OpenBracketToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CloseBracketToken {
  readonly kind: 'CloseBracketToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SemicolonToken {
  readonly kind: 'SemicolonToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface LessThanSlashToken {
  readonly kind: 'LessThanSlashToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PlusPlusToken {
  readonly kind: 'PlusPlusToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface MinusMinusToken {
  readonly kind: 'MinusMinusToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TildeToken {
  readonly kind: 'TildeToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AtToken {
  readonly kind: 'AtToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BacktickToken {
  readonly kind: 'BacktickToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface HashToken {
  readonly kind: 'HashToken';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AnyKeywordToken {
  readonly kind: 'AnyKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface AsKeywordToken {
  readonly kind: 'AsKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BigIntKeywordToken {
  readonly kind: 'BigIntKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BooleanKeywordToken {
  readonly kind: 'BooleanKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface BreakKeywordToken {
  readonly kind: 'BreakKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface CatchKeywordToken {
  readonly kind: 'CatchKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ClassKeywordToken {
  readonly kind: 'ClassKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ConstructorKeywordToken {
  readonly kind: 'ConstructorKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ContinueKeywordToken {
  readonly kind: 'ContinueKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DebuggerKeywordToken {
  readonly kind: 'DebuggerKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DeleteKeywordToken {
  readonly kind: 'DeleteKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface DoKeywordToken {
  readonly kind: 'DoKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ElseKeywordToken {
  readonly kind: 'ElseKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface EnumKeywordToken {
  readonly kind: 'EnumKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ExtendsKeywordToken {
  readonly kind: 'ExtendsKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FalseKeywordToken {
  readonly kind: 'FalseKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FinallyKeywordToken {
  readonly kind: 'FinallyKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ForKeywordToken {
  readonly kind: 'ForKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FromKeywordToken {
  readonly kind: 'FromKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface FunctionKeywordToken {
  readonly kind: 'FunctionKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GetKeywordToken {
  readonly kind: 'GetKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface GlobalKeywordToken {
  readonly kind: 'GlobalKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IfKeywordToken {
  readonly kind: 'IfKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImplementsKeywordToken {
  readonly kind: 'ImplementsKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ImportKeywordToken {
  readonly kind: 'ImportKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface InferKeywordToken {
  readonly kind: 'InferKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface InterfaceKeywordToken {
  readonly kind: 'InterfaceKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IntrinsicKeywordToken {
  readonly kind: 'IntrinsicKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface IsKeywordToken {
  readonly kind: 'IsKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface KeyOfKeywordToken {
  readonly kind: 'KeyOfKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface LetKeywordToken {
  readonly kind: 'LetKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ModuleKeywordToken {
  readonly kind: 'ModuleKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NamespaceKeywordToken {
  readonly kind: 'NamespaceKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NeverKeywordToken {
  readonly kind: 'NeverKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NewKeywordToken {
  readonly kind: 'NewKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NullKeywordToken {
  readonly kind: 'NullKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface NumberKeywordToken {
  readonly kind: 'NumberKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ObjectKeywordToken {
  readonly kind: 'ObjectKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface OfKeywordToken {
  readonly kind: 'OfKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface PackageKeywordToken {
  readonly kind: 'PackageKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface RequireKeywordToken {
  readonly kind: 'RequireKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ReturnKeywordToken {
  readonly kind: 'ReturnKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SatisfiesKeywordToken {
  readonly kind: 'SatisfiesKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SetKeywordToken {
  readonly kind: 'SetKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface StringKeywordToken {
  readonly kind: 'StringKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SuperKeywordToken {
  readonly kind: 'SuperKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SwitchKeywordToken {
  readonly kind: 'SwitchKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface SymbolKeywordToken {
  readonly kind: 'SymbolKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ThisKeywordToken {
  readonly kind: 'ThisKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface ThrowKeywordToken {
  readonly kind: 'ThrowKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TrueKeywordToken {
  readonly kind: 'TrueKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TryKeywordToken {
  readonly kind: 'TryKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeKeywordToken {
  readonly kind: 'TypeKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface TypeOfKeywordToken {
  readonly kind: 'TypeOfKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface UndefinedKeywordToken {
  readonly kind: 'UndefinedKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface UniqueKeywordToken {
  readonly kind: 'UniqueKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface UnknownKeywordToken {
  readonly kind: 'UnknownKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface VarKeywordToken {
  readonly kind: 'VarKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface VoidKeywordToken {
  readonly kind: 'VoidKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface WhileKeywordToken {
  readonly kind: 'WhileKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface WithKeywordToken {
  readonly kind: 'WithKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
/**
 * @group Node Types
 */
export interface YieldKeywordToken {
  readonly kind: 'YieldKeyword';
  pos?: FileLocation;
  jsDoc?: NodeArray<JSDoc>;
}
