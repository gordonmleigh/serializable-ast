export type NodeArray<T> = readonly T[];
export interface FileLocation {
  char?: number;
  line?: number;
  file?: string;
}
export type SyntaxKind = Node['kind'];
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
export type AccessorDeclaration =
  | GetAccessorDeclaration
  | SetAccessorDeclaration;
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
}
export interface BinaryExpression {
  readonly kind: 'BinaryExpression';
  readonly left: Expression;
  readonly operatorToken: BinaryOperatorToken;
  readonly right: Expression;
  pos?: FileLocation;
}
export interface Block {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
}
export interface BreakStatement {
  readonly kind: 'BreakStatement';
  readonly label?: Identifier;
  pos?: FileLocation;
}
export interface CallSignatureDeclaration {
  readonly kind: 'CallSignature';
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
}
export interface CaseClause {
  readonly kind: 'CaseClause';
  readonly expression: Expression;
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
}
export type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
export interface ClassStaticBlockDeclaration {
  readonly kind: 'ClassStaticBlockDeclaration';
  readonly body: Block;
  readonly name?: PropertyName;
  pos?: FileLocation;
}
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
}
export interface ConstructorTypeNode {
  readonly kind: 'ConstructorType';
  readonly modifiers?: NodeArray<Modifier>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  pos?: FileLocation;
}
export interface ConstructSignatureDeclaration {
  readonly kind: 'ConstructSignature';
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
}
export interface ContinueStatement {
  readonly kind: 'ContinueStatement';
  readonly label?: Identifier;
  pos?: FileLocation;
}
export interface DebuggerStatement {
  readonly kind: 'DebuggerStatement';
  pos?: FileLocation;
}
export interface DoStatement {
  readonly kind: 'DoStatement';
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
}
export interface ElementAccessExpression {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
  pos?: FileLocation;
}
export interface EmptyStatement {
  readonly kind: 'EmptyStatement';
  pos?: FileLocation;
}
export interface EndOfFileToken {
  readonly kind: 'EndOfFileToken';
  pos?: FileLocation;
}
export interface EnumDeclaration {
  readonly kind: 'EnumDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly members: NodeArray<EnumMember>;
  pos?: FileLocation;
}
export interface EnumMember {
  readonly kind: 'EnumMember';
  readonly name: PropertyName;
  readonly initializer?: Expression;
  pos?: FileLocation;
}
export interface ExportAssignment {
  readonly kind: 'ExportAssignment';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly isExportEquals?: boolean;
  readonly expression: Expression;
  readonly name?: Identifier | StringLiteral | NumericLiteral;
  pos?: FileLocation;
}
export interface ExportDeclaration {
  readonly kind: 'ExportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly isTypeOnly: boolean;
  readonly exportClause?: NamedExportBindings;
  readonly moduleSpecifier?: Expression;
  readonly assertClause?: AssertClause;
  readonly name?: Identifier | StringLiteral | NumericLiteral;
  pos?: FileLocation;
}
export interface ExportSpecifier {
  readonly kind: 'ExportSpecifier';
  readonly isTypeOnly: boolean;
  readonly propertyName?: Identifier;
  readonly name: Identifier;
  pos?: FileLocation;
}
export interface ExpressionStatement {
  readonly kind: 'ExpressionStatement';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface ForInStatement {
  readonly kind: 'ForInStatement';
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
}
export interface ForOfStatement {
  readonly kind: 'ForOfStatement';
  readonly awaitModifier?: AwaitKeyword;
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
}
export interface ForStatement {
  readonly kind: 'ForStatement';
  readonly initializer?: ForInitializer;
  readonly condition?: Expression;
  readonly incrementor?: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
}
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
}
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
}
export interface FunctionTypeNode {
  readonly kind: 'FunctionType';
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  pos?: FileLocation;
}
export interface Identifier {
  readonly kind: 'Identifier';
  readonly text: string;
  readonly originalKeywordKind?: SyntaxKind;
  readonly isInJSDocNamespace?: boolean;
  pos?: FileLocation;
}
export interface IfStatement {
  readonly kind: 'IfStatement';
  readonly expression: Expression;
  readonly thenStatement: Statement;
  readonly elseStatement?: Statement;
  pos?: FileLocation;
}
export interface ImportDeclaration {
  readonly kind: 'ImportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly importClause?: ImportClause;
  readonly moduleSpecifier: Expression;
  readonly assertClause?: AssertClause;
  pos?: FileLocation;
}
export interface ImportEqualsDeclaration {
  readonly kind: 'ImportEqualsDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly isTypeOnly: boolean;
  readonly moduleReference: ModuleReference;
  pos?: FileLocation;
}
export interface IndexSignatureDeclaration {
  readonly kind: 'IndexSignature';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
}
export interface InterfaceDeclaration {
  readonly kind: 'InterfaceDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<TypeElement>;
  pos?: FileLocation;
}
export interface JSDocFunctionType {
  readonly kind: 'JSDocFunctionType';
  readonly name?: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  pos?: FileLocation;
}
export interface JSDocSignature {
  readonly kind: 'JSDocSignature';
  readonly typeParameters?: readonly JSDocTemplateTag[];
  readonly parameters: readonly JSDocParameterTag[];
  readonly type: JSDocReturnTag | undefined;
  pos?: FileLocation;
}
export interface LabeledStatement {
  readonly kind: 'LabeledStatement';
  readonly label: Identifier;
  readonly statement: Statement;
  pos?: FileLocation;
}
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
}
export interface MethodSignature {
  readonly kind: 'MethodSignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration> | undefined;
  readonly parameters: NodeArray<ParameterDeclaration>;
  readonly type?: TypeNode | undefined;
  readonly questionToken?: QuestionToken | undefined;
  pos?: FileLocation;
}
export interface ModuleDeclaration {
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: ModuleName;
  readonly body?: ModuleBody | JSDocNamespaceDeclaration;
  pos?: FileLocation;
}
export interface NamedTupleMember {
  readonly kind: 'NamedTupleMember';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: Identifier;
  readonly questionToken?: QuestionToken;
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface NamespaceExportDeclaration {
  readonly kind: 'NamespaceExportDeclaration';
  readonly name: Identifier;
  pos?: FileLocation;
}
export interface ObjectLiteralExpression {
  readonly kind: 'ObjectLiteralExpression';
  readonly properties: NodeArray<ObjectLiteralElementLike>;
  pos?: FileLocation;
}
export interface ParameterDeclaration {
  readonly kind: 'Parameter';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
}
export interface ParenthesizedExpression {
  readonly kind: 'ParenthesizedExpression';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface PropertyAccessExpression {
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
  pos?: FileLocation;
}
export interface PropertyAssignment {
  readonly kind: 'PropertyAssignment';
  readonly name: PropertyName;
  readonly initializer: Expression;
  pos?: FileLocation;
}
export interface PropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
}
export interface PropertySignature {
  readonly kind: 'PropertySignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
  pos?: FileLocation;
}
export interface ReturnStatement {
  readonly kind: 'ReturnStatement';
  readonly expression?: Expression;
  pos?: FileLocation;
}
export interface ShorthandPropertyAssignment {
  readonly kind: 'ShorthandPropertyAssignment';
  readonly name: Identifier;
  readonly equalsToken?: EqualsToken;
  readonly objectAssignmentInitializer?: Expression;
  pos?: FileLocation;
}
export interface SpreadAssignment {
  readonly kind: 'SpreadAssignment';
  readonly expression: Expression;
  readonly name?: PropertyName;
  pos?: FileLocation;
}
export interface SwitchStatement {
  readonly kind: 'SwitchStatement';
  readonly expression: Expression;
  readonly caseBlock: CaseBlock;
  possiblyExhaustive?: boolean;
  pos?: FileLocation;
}
export interface ThrowStatement {
  readonly kind: 'ThrowStatement';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface TryStatement {
  readonly kind: 'TryStatement';
  readonly tryBlock: Block;
  readonly catchClause?: CatchClause;
  readonly finallyBlock?: Block;
  pos?: FileLocation;
}
export interface TypeAliasDeclaration {
  readonly kind: 'TypeAliasDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface TypeParameterDeclaration {
  readonly kind: 'TypeParameter';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: Identifier;
  readonly constraint?: TypeNode;
  readonly default?: TypeNode;
  expression?: Expression;
  pos?: FileLocation;
}
export interface VariableDeclaration {
  readonly kind: 'VariableDeclaration';
  readonly name: BindingName;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
}
export interface VariableStatement {
  readonly kind: 'VariableStatement';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly declarationList: VariableDeclarationList;
  pos?: FileLocation;
}
export interface WhileStatement {
  readonly kind: 'WhileStatement';
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
}
export interface WithStatement {
  readonly kind: 'WithStatement';
  readonly expression: Expression;
  readonly statement: Statement;
  pos?: FileLocation;
}
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
export interface TypePredicateNode {
  readonly kind: 'TypePredicate';
  readonly assertsModifier?: AssertsKeyword;
  readonly parameterName: Identifier | ThisTypeNode;
  readonly type?: TypeNode;
  pos?: FileLocation;
}
export interface ParenthesizedTypeNode {
  readonly kind: 'ParenthesizedType';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface TypeOperatorNode {
  readonly kind: 'TypeOperator';
  readonly operator: 'KeyOfKeyword' | 'UniqueKeyword' | 'ReadonlyKeyword';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface MappedTypeNode {
  readonly kind: 'MappedType';
  readonly readonlyToken?: ReadonlyKeyword | PlusToken | MinusToken;
  readonly typeParameter: TypeParameterDeclaration;
  readonly nameType?: TypeNode;
  readonly questionToken?: QuestionToken | PlusToken | MinusToken;
  readonly type?: TypeNode;
  readonly members?: NodeArray<TypeElement>;
  pos?: FileLocation;
}
export type AssertionExpression = TypeAssertion | AsExpression;
export interface JSDocTypeExpression {
  readonly kind: 'JSDocTypeExpression';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface JSDocNonNullableType {
  readonly kind: 'JSDocNonNullableType';
  readonly type: TypeNode;
  readonly postfix: boolean;
  pos?: FileLocation;
}
export interface JSDocNullableType {
  readonly kind: 'JSDocNullableType';
  readonly type: TypeNode;
  readonly postfix: boolean;
  pos?: FileLocation;
}
export interface JSDocOptionalType {
  readonly kind: 'JSDocOptionalType';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface JSDocVariadicType {
  readonly kind: 'JSDocVariadicType';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export type HasTypeArguments =
  | CallExpression
  | NewExpression
  | TaggedTemplateExpression
  | JsxOpeningElement
  | JsxSelfClosingElement;
export interface CallExpression {
  readonly kind: 'CallExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
}
export interface NewExpression {
  readonly kind: 'NewExpression';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments?: NodeArray<Expression>;
  pos?: FileLocation;
}
export interface TaggedTemplateExpression {
  readonly kind: 'TaggedTemplateExpression';
  readonly tag: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly template: TemplateLiteral;
  pos?: FileLocation;
}
export interface JsxOpeningElement {
  readonly kind: 'JsxOpeningElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
  pos?: FileLocation;
}
export interface JsxSelfClosingElement {
  readonly kind: 'JsxSelfClosingElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
  pos?: FileLocation;
}
export type HasInitializer =
  | HasExpressionInitializer
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | JsxAttribute;
export type HasExpressionInitializer =
  | VariableDeclaration
  | ParameterDeclaration
  | BindingElement
  | PropertyDeclaration
  | PropertyAssignment
  | EnumMember;
export interface JsxAttribute {
  readonly kind: 'JsxAttribute';
  readonly name: Identifier;
  readonly initializer?: JsxAttributeValue;
  pos?: FileLocation;
}
export interface BindingElement {
  readonly kind: 'BindingElement';
  readonly propertyName?: PropertyName;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly initializer?: Expression;
  pos?: FileLocation;
}
export type HasDecorators =
  | ParameterDeclaration
  | PropertyDeclaration
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ClassExpression
  | ClassDeclaration;
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
}
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
}
export interface ClassExpression {
  readonly kind: 'ClassExpression';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
  pos?: FileLocation;
}
export interface ClassDeclaration {
  readonly kind: 'ClassDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
  pos?: FileLocation;
}
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
export interface DotToken {
  readonly kind: 'DotToken';
  pos?: FileLocation;
}
export interface DotDotDotToken {
  readonly kind: 'DotDotDotToken';
  pos?: FileLocation;
}
export interface QuestionToken {
  readonly kind: 'QuestionToken';
  pos?: FileLocation;
}
export interface ExclamationToken {
  readonly kind: 'ExclamationToken';
  pos?: FileLocation;
}
export interface ColonToken {
  readonly kind: 'ColonToken';
  pos?: FileLocation;
}
export interface EqualsToken {
  readonly kind: 'EqualsToken';
  pos?: FileLocation;
}
export interface AmpersandAmpersandEqualsToken {
  readonly kind: 'AmpersandAmpersandEqualsToken';
  pos?: FileLocation;
}
export interface BarBarEqualsToken {
  readonly kind: 'BarBarEqualsToken';
  pos?: FileLocation;
}
export interface QuestionQuestionEqualsToken {
  readonly kind: 'QuestionQuestionEqualsToken';
  pos?: FileLocation;
}
export interface AsteriskToken {
  readonly kind: 'AsteriskToken';
  pos?: FileLocation;
}
export interface EqualsGreaterThanToken {
  readonly kind: 'EqualsGreaterThanToken';
  pos?: FileLocation;
}
export interface PlusToken {
  readonly kind: 'PlusToken';
  pos?: FileLocation;
}
export interface MinusToken {
  readonly kind: 'MinusToken';
  pos?: FileLocation;
}
export interface QuestionDotToken {
  readonly kind: 'QuestionDotToken';
  pos?: FileLocation;
}
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
export interface AssertsKeyword {
  readonly kind: 'AssertsKeyword';
  pos?: FileLocation;
}
export interface AssertKeyword {
  readonly kind: 'AssertKeyword';
  pos?: FileLocation;
}
export interface AwaitKeyword {
  readonly kind: 'AwaitKeyword';
  pos?: FileLocation;
}
export interface CaseKeyword {
  readonly kind: 'CaseKeyword';
  pos?: FileLocation;
}
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
export interface AbstractKeyword {
  readonly kind: 'AbstractKeyword';
  pos?: FileLocation;
}
export interface AccessorKeyword {
  readonly kind: 'AccessorKeyword';
  pos?: FileLocation;
}
export interface AsyncKeyword {
  readonly kind: 'AsyncKeyword';
  pos?: FileLocation;
}
export interface ConstKeyword {
  readonly kind: 'ConstKeyword';
  pos?: FileLocation;
}
export interface DeclareKeyword {
  readonly kind: 'DeclareKeyword';
  pos?: FileLocation;
}
export interface DefaultKeyword {
  readonly kind: 'DefaultKeyword';
  pos?: FileLocation;
}
export interface ExportKeyword {
  readonly kind: 'ExportKeyword';
  pos?: FileLocation;
}
export interface InKeyword {
  readonly kind: 'InKeyword';
  pos?: FileLocation;
}
export interface PrivateKeyword {
  readonly kind: 'PrivateKeyword';
  pos?: FileLocation;
}
export interface ProtectedKeyword {
  readonly kind: 'ProtectedKeyword';
  pos?: FileLocation;
}
export interface PublicKeyword {
  readonly kind: 'PublicKeyword';
  pos?: FileLocation;
}
export interface ReadonlyKeyword {
  readonly kind: 'ReadonlyKeyword';
  pos?: FileLocation;
}
export interface OutKeyword {
  readonly kind: 'OutKeyword';
  pos?: FileLocation;
}
export interface OverrideKeyword {
  readonly kind: 'OverrideKeyword';
  pos?: FileLocation;
}
export interface StaticKeyword {
  readonly kind: 'StaticKeyword';
  pos?: FileLocation;
}
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
export type ModifierLike = Modifier | Decorator;
export interface Decorator {
  readonly kind: 'Decorator';
  readonly expression: LeftHandSideExpression;
  pos?: FileLocation;
}
export type AccessibilityModifier =
  | PublicKeyword
  | PrivateKeyword
  | ProtectedKeyword;
export type ParameterPropertyModifier = AccessibilityModifier | ReadonlyKeyword;
export type ClassMemberModifier =
  | AccessibilityModifier
  | ReadonlyKeyword
  | StaticKeyword
  | AccessorKeyword;
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
  | JsxSelfClosingElement
  | JsxFragment
  | MissingDeclaration
  | ClassExpression;
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
  | JSDocEnumTag
  | JSDocSignature
  | JSDocPropertyLikeTag
  | JSDocTypeLiteral
  | SourceFile;
export interface QualifiedName {
  readonly kind: 'QualifiedName';
  readonly left: EntityName;
  readonly right: Identifier;
  pos?: FileLocation;
}
export type EntityName = Identifier | QualifiedName;
export type PropertyName =
  | Identifier
  | StringLiteral
  | NumericLiteral
  | ComputedPropertyName
  | PrivateIdentifier;
export interface StringLiteral {
  readonly kind: 'StringLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export interface NumericLiteral {
  readonly kind: 'NumericLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export interface ComputedPropertyName {
  readonly kind: 'ComputedPropertyName';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface PrivateIdentifier {
  readonly kind: 'PrivateIdentifier';
  readonly text: string;
  pos?: FileLocation;
}
export type MemberName = Identifier | PrivateIdentifier;
export type DeclarationName =
  | Identifier
  | PrivateIdentifier
  | StringLiteralLike
  | NumericLiteral
  | ComputedPropertyName
  | ElementAccessExpression
  | BindingPattern
  | EntityNameExpression;
export type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
export type EntityNameExpression =
  | Identifier
  | PropertyAccessEntityNameExpression;
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
export type LeftHandSideExpression =
  | PartiallyEmittedExpression
  | MemberExpression
  | CallExpression
  | NonNullExpression;
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
export type SignatureDeclarationBase =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | FunctionLikeDeclarationBase
  | MethodSignature
  | IndexSignatureDeclaration
  | FunctionOrConstructorTypeNodeBase
  | JSDocFunctionType;
export type TypeElement =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | PropertySignature
  | MethodSignature
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration;
export type BindingName = Identifier | BindingPattern;
export interface VariableDeclarationList {
  readonly kind: 'VariableDeclarationList';
  readonly declarations: NodeArray<VariableDeclaration>;
  pos?: FileLocation;
}
export type ClassElement =
  | PropertyDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | SemicolonClassElement
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration
  | ClassStaticBlockDeclaration;
export interface AutoAccessorPropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
  pos?: FileLocation;
}
export type ObjectLiteralElement =
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | JsxAttribute
  | JsxSpreadAttribute;
export type ObjectLiteralElementLike =
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | AccessorDeclaration;
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
export interface JSDocPropertyTag {
  readonly kind: 'JSDocPropertyTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly isNameFirst: boolean;
  readonly isBracketed: boolean;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocParameterTag {
  readonly kind: 'JSDocParameterTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly isNameFirst: boolean;
  readonly isBracketed: boolean;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface ObjectBindingPattern {
  readonly kind: 'ObjectBindingPattern';
  readonly elements: NodeArray<BindingElement>;
  pos?: FileLocation;
}
export interface ArrayBindingPattern {
  readonly kind: 'ArrayBindingPattern';
  readonly elements: NodeArray<ArrayBindingElement>;
  pos?: FileLocation;
}
export type ArrayBindingElement = BindingElement | OmittedExpression;
export interface OmittedExpression {
  readonly kind: 'OmittedExpression';
  pos?: FileLocation;
}
export type FunctionLikeDeclarationBase =
  | FunctionDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | FunctionExpression
  | ArrowFunction;
export type FunctionLikeDeclaration =
  | FunctionDeclaration
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ConstructorDeclaration
  | FunctionExpression
  | ArrowFunction;
export interface FunctionBody {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
}
export interface SemicolonClassElement {
  readonly kind: 'SemicolonClassElement';
  readonly name?: PropertyName;
  pos?: FileLocation;
}
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
export interface ImportTypeAssertionContainer {
  readonly kind: 'ImportTypeAssertionContainer';
  readonly assertClause: AssertClause;
  readonly multiLine?: boolean;
  pos?: FileLocation;
}
export interface AssertClause {
  readonly kind: 'AssertClause';
  readonly elements: NodeArray<AssertEntry>;
  readonly multiLine?: boolean;
  pos?: FileLocation;
}
export interface ImportTypeNode {
  readonly kind: 'ImportType';
  readonly isTypeOf: boolean;
  readonly argument: TypeNode;
  readonly assertions?: ImportTypeAssertionContainer;
  readonly qualifier?: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
}
export type NodeWithTypeArguments =
  | ImportTypeNode
  | TypeReferenceNode
  | TypeQueryNode
  | ExpressionWithTypeArguments;
export interface ThisTypeNode {
  readonly kind: 'ThisType';
  pos?: FileLocation;
}
export type FunctionOrConstructorTypeNode =
  | FunctionTypeNode
  | ConstructorTypeNode;
export type FunctionOrConstructorTypeNodeBase =
  | FunctionTypeNode
  | ConstructorTypeNode;
export type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
export interface TypeReferenceNode {
  readonly kind: 'TypeReference';
  readonly typeName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
}
export interface ExpressionWithTypeArguments {
  readonly kind: 'ExpressionWithTypeArguments';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
}
export interface TypeQueryNode {
  readonly kind: 'TypeQuery';
  readonly exprName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
  pos?: FileLocation;
}
export interface TypeLiteralNode {
  readonly kind: 'TypeLiteral';
  readonly members: NodeArray<TypeElement>;
  pos?: FileLocation;
}
export interface ArrayTypeNode {
  readonly kind: 'ArrayType';
  readonly elementType: TypeNode;
  pos?: FileLocation;
}
export interface TupleTypeNode {
  readonly kind: 'TupleType';
  readonly elements: NodeArray<TypeNode | NamedTupleMember>;
  pos?: FileLocation;
}
export interface OptionalTypeNode {
  readonly kind: 'OptionalType';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface RestTypeNode {
  readonly kind: 'RestType';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
export interface UnionTypeNode {
  readonly kind: 'UnionType';
  readonly types: NodeArray<TypeNode>;
  pos?: FileLocation;
}
export interface IntersectionTypeNode {
  readonly kind: 'IntersectionType';
  readonly types: NodeArray<TypeNode>;
  pos?: FileLocation;
}
export interface ConditionalTypeNode {
  readonly kind: 'ConditionalType';
  readonly checkType: TypeNode;
  readonly extendsType: TypeNode;
  readonly trueType: TypeNode;
  readonly falseType: TypeNode;
  pos?: FileLocation;
}
export interface InferTypeNode {
  readonly kind: 'InferType';
  readonly typeParameter: TypeParameterDeclaration;
  pos?: FileLocation;
}
export interface IndexedAccessTypeNode {
  readonly kind: 'IndexedAccessType';
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
  pos?: FileLocation;
}
export interface LiteralTypeNode {
  readonly kind: 'LiteralType';
  readonly literal:
    | NullLiteral
    | BooleanLiteral
    | LiteralExpression
    | PrefixUnaryExpression;
  pos?: FileLocation;
}
export interface NullLiteral {
  readonly kind: 'NullKeyword';
  pos?: FileLocation;
}
export type BooleanLiteral = TrueLiteral | FalseLiteral;
export type LiteralExpression =
  | StringLiteral
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral
  | NumericLiteral
  | BigIntLiteral;
export interface PrefixUnaryExpression {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: PrefixUnaryOperator;
  readonly operand: UnaryExpression;
  pos?: FileLocation;
}
export interface NoSubstitutionTemplateLiteral {
  readonly kind: 'NoSubstitutionTemplateLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  rawText?: string;
  pos?: FileLocation;
}
export type PropertyNameLiteral =
  | Identifier
  | StringLiteralLike
  | NumericLiteral;
export interface TemplateLiteralTypeNode {
  kind: 'TemplateLiteralType';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
  pos?: FileLocation;
}
export interface TemplateHead {
  readonly kind: 'TemplateHead';
  rawText?: string;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export interface TemplateLiteralTypeSpan {
  readonly kind: 'TemplateLiteralTypeSpan';
  readonly type: TypeNode;
  readonly literal: TemplateMiddle | TemplateTail;
  pos?: FileLocation;
}
export interface TemplateMiddle {
  readonly kind: 'TemplateMiddle';
  rawText?: string;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export interface TemplateTail {
  readonly kind: 'TemplateTail';
  rawText?: string;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export interface PartiallyEmittedExpression {
  readonly kind: 'PartiallyEmittedExpression';
  readonly expression: Expression;
  pos?: FileLocation;
}
export type UnaryExpression =
  | UpdateExpression
  | DeleteExpression
  | TypeOfExpression
  | VoidExpression
  | AwaitExpression
  | TypeAssertion;
export type UpdateExpression =
  | PrefixUnaryExpression
  | PostfixUnaryExpression
  | LeftHandSideExpression;
export type PrefixUnaryOperator =
  | 'PlusPlusToken'
  | 'MinusMinusToken'
  | 'PlusToken'
  | 'MinusToken'
  | 'TildeToken'
  | 'ExclamationToken';
export type PostfixUnaryOperator = 'PlusPlusToken' | 'MinusMinusToken';
export interface PostfixUnaryExpression {
  readonly kind: 'PostfixUnaryExpression';
  readonly operand: LeftHandSideExpression;
  readonly operator: PostfixUnaryOperator;
  pos?: FileLocation;
}
export type MemberExpression =
  | PrimaryExpression
  | PropertyAccessExpression
  | ElementAccessExpression
  | ExpressionWithTypeArguments
  | TaggedTemplateExpression;
export interface TrueLiteral {
  readonly kind: 'TrueKeyword';
  pos?: FileLocation;
}
export interface FalseLiteral {
  readonly kind: 'FalseKeyword';
  pos?: FileLocation;
}
export interface ThisExpression {
  readonly kind: 'ThisKeyword';
  pos?: FileLocation;
}
export interface SuperExpression {
  readonly kind: 'SuperKeyword';
  pos?: FileLocation;
}
export interface ImportExpression {
  readonly kind: 'ImportKeyword';
  pos?: FileLocation;
}
export interface DeleteExpression {
  readonly kind: 'DeleteExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
}
export interface TypeOfExpression {
  readonly kind: 'TypeOfExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
}
export interface VoidExpression {
  readonly kind: 'VoidExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
}
export interface AwaitExpression {
  readonly kind: 'AwaitExpression';
  readonly expression: UnaryExpression;
  pos?: FileLocation;
}
export interface YieldExpression {
  readonly kind: 'YieldExpression';
  readonly asteriskToken?: AsteriskToken;
  readonly expression?: Expression;
  pos?: FileLocation;
}
export type ExponentiationOperator = 'AsteriskAsteriskToken';
export type MultiplicativeOperator =
  | 'AsteriskToken'
  | 'SlashToken'
  | 'PercentToken';
export type MultiplicativeOperatorOrHigher =
  | ExponentiationOperator
  | MultiplicativeOperator;
export type AdditiveOperator = 'PlusToken' | 'MinusToken';
export type AdditiveOperatorOrHigher =
  | MultiplicativeOperatorOrHigher
  | AdditiveOperator;
export type ShiftOperator =
  | 'LessThanLessThanToken'
  | 'GreaterThanGreaterThanToken'
  | 'GreaterThanGreaterThanGreaterThanToken';
export type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
export type RelationalOperator =
  | 'LessThanToken'
  | 'LessThanEqualsToken'
  | 'GreaterThanToken'
  | 'GreaterThanEqualsToken'
  | 'InstanceOfKeyword'
  | 'InKeyword';
export type RelationalOperatorOrHigher =
  | ShiftOperatorOrHigher
  | RelationalOperator;
export type EqualityOperator =
  | 'EqualsEqualsToken'
  | 'EqualsEqualsEqualsToken'
  | 'ExclamationEqualsEqualsToken'
  | 'ExclamationEqualsToken';
export type EqualityOperatorOrHigher =
  | RelationalOperatorOrHigher
  | EqualityOperator;
export type BitwiseOperator = 'AmpersandToken' | 'BarToken' | 'CaretToken';
export type BitwiseOperatorOrHigher =
  | EqualityOperatorOrHigher
  | BitwiseOperator;
export type LogicalOperator = 'AmpersandAmpersandToken' | 'BarBarToken';
export type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
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
export type AssignmentOperator = 'EqualsToken' | CompoundAssignmentOperator;
export type AssignmentOperatorOrHigher =
  | 'QuestionQuestionToken'
  | LogicalOperatorOrHigher
  | AssignmentOperator;
export type BinaryOperator = AssignmentOperatorOrHigher | 'CommaToken';
export type BinaryOperatorToken = AssignmentOperatorOrHigherToken | CommaToken;
export type AssignmentOperatorToken =
  | EqualsToken
  | CompoundAssignmentOperatorToken;
export interface AssignmentExpression<
  TOperator extends AssignmentOperatorToken,
> {
  readonly left: LeftHandSideExpression;
  readonly operatorToken: TOperator;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
  pos?: FileLocation;
}
export interface ObjectDestructuringAssignment {
  readonly left: ObjectLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
  pos?: FileLocation;
}
export interface ArrayDestructuringAssignment {
  readonly left: ArrayLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
  pos?: FileLocation;
}
export interface ArrayLiteralExpression {
  readonly kind: 'ArrayLiteralExpression';
  readonly elements: NodeArray<Expression>;
  pos?: FileLocation;
}
export type DestructuringAssignment =
  | ObjectDestructuringAssignment
  | ArrayDestructuringAssignment;
export type BindingOrAssignmentElement =
  | VariableDeclaration
  | ParameterDeclaration
  | ObjectBindingOrAssignmentElement
  | ArrayBindingOrAssignmentElement;
export type ObjectBindingOrAssignmentElement =
  | BindingElement
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment;
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
export interface SpreadElement {
  readonly kind: 'SpreadElement';
  readonly expression: Expression;
  pos?: FileLocation;
}
export type BindingOrAssignmentElementRestIndicator =
  | DotDotDotToken
  | SpreadElement
  | SpreadAssignment;
export type BindingOrAssignmentElementTarget =
  | BindingOrAssignmentPattern
  | Identifier
  | PropertyAccessExpression
  | ElementAccessExpression
  | OmittedExpression;
export type BindingOrAssignmentPattern =
  | ObjectBindingOrAssignmentPattern
  | ArrayBindingOrAssignmentPattern;
export type ObjectBindingOrAssignmentPattern =
  | ObjectBindingPattern
  | ObjectLiteralExpression;
export type ArrayBindingOrAssignmentPattern =
  | ArrayBindingPattern
  | ArrayLiteralExpression;
export type AssignmentPattern =
  | ObjectLiteralExpression
  | ArrayLiteralExpression;
export interface ConditionalExpression {
  readonly kind: 'ConditionalExpression';
  readonly condition: Expression;
  readonly questionToken: QuestionToken;
  readonly whenTrue: Expression;
  readonly colonToken: ColonToken;
  readonly whenFalse: Expression;
  pos?: FileLocation;
}
export type ConciseBody = FunctionBody | Expression;
export type LiteralLikeNode =
  | TemplateLiteralLikeNode
  | LiteralExpression
  | JsxText;
export type TemplateLiteralLikeNode =
  | NoSubstitutionTemplateLiteral
  | TemplateHead
  | TemplateMiddle
  | TemplateTail;
export interface RegularExpressionLiteral {
  readonly kind: 'RegularExpressionLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export interface BigIntLiteral {
  readonly kind: 'BigIntLiteral';
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export type LiteralToken =
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | JsxText
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral;
export interface JsxText {
  readonly kind: 'JsxText';
  readonly containsOnlyTriviaWhiteSpaces: boolean;
  text: string;
  isUnterminated?: boolean;
  hasExtendedUnicodeEscape?: boolean;
  pos?: FileLocation;
}
export type PseudoLiteralToken = TemplateHead | TemplateMiddle | TemplateTail;
export type TemplateLiteralToken =
  | NoSubstitutionTemplateLiteral
  | PseudoLiteralToken;
export interface TemplateExpression {
  readonly kind: 'TemplateExpression';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateSpan>;
  pos?: FileLocation;
}
export interface TemplateSpan {
  readonly kind: 'TemplateSpan';
  readonly expression: Expression;
  readonly literal: TemplateMiddle | TemplateTail;
  pos?: FileLocation;
}
export type TemplateLiteral =
  | TemplateExpression
  | NoSubstitutionTemplateLiteral;
export type ObjectLiteralExpressionBase =
  | ObjectLiteralExpression
  | JsxAttributes;
export interface PropertyAccessEntityNameExpression {
  readonly expression: EntityNameExpression;
  readonly name: Identifier;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  pos?: FileLocation;
}
export type EntityNameOrEntityNameExpression =
  | EntityName
  | EntityNameExpression;
export type AccessExpression =
  | PropertyAccessExpression
  | ElementAccessExpression;
export interface PropertyAccessChain {
  readonly name: MemberName;
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  pos?: FileLocation;
}
export interface SuperPropertyAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
  pos?: FileLocation;
}
export interface ElementAccessChain {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
  pos?: FileLocation;
}
export interface SuperElementAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'ElementAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
  pos?: FileLocation;
}
export type SuperProperty =
  | SuperPropertyAccessExpression
  | SuperElementAccessExpression;
export interface CallChain {
  readonly kind: 'CallExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
}
export type OptionalChain =
  | PropertyAccessChain
  | ElementAccessChain
  | CallChain
  | NonNullChain;
export interface NonNullChain {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface SuperCall {
  readonly expression: SuperExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
}
export interface ImportCall {
  readonly expression: ImportExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
  pos?: FileLocation;
}
export type CallLikeExpression =
  | CallExpression
  | NewExpression
  | TaggedTemplateExpression
  | Decorator
  | JsxOpeningLikeElement;
export type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
export interface AsExpression {
  readonly kind: 'AsExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface TypeAssertion {
  readonly kind: 'TypeAssertionExpression';
  readonly type: TypeNode;
  readonly expression: UnaryExpression;
  pos?: FileLocation;
}
export interface SatisfiesExpression {
  readonly kind: 'SatisfiesExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
  pos?: FileLocation;
}
export interface NonNullExpression {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface MetaProperty {
  readonly kind: 'MetaProperty';
  readonly keywordToken: 'NewKeyword' | 'ImportKeyword';
  readonly name: Identifier;
  pos?: FileLocation;
}
export interface JsxElement {
  readonly kind: 'JsxElement';
  readonly openingElement: JsxOpeningElement;
  readonly children: NodeArray<JsxChild>;
  readonly closingElement: JsxClosingElement;
  pos?: FileLocation;
}
export type JsxChild =
  | JsxText
  | JsxExpression
  | JsxElement
  | JsxSelfClosingElement
  | JsxFragment;
export interface JsxClosingElement {
  readonly kind: 'JsxClosingElement';
  readonly tagName: JsxTagNameExpression;
  pos?: FileLocation;
}
export type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
export interface JsxSpreadAttribute {
  readonly kind: 'JsxSpreadAttribute';
  readonly expression: Expression;
  readonly name?: PropertyName;
  pos?: FileLocation;
}
export type JsxTagNameExpression =
  | Identifier
  | ThisExpression
  | JsxTagNamePropertyAccess;
export interface JsxTagNamePropertyAccess {
  readonly expression: JsxTagNameExpression;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
  pos?: FileLocation;
}
export interface JsxAttributes {
  readonly kind: 'JsxAttributes';
  readonly properties: NodeArray<JsxAttributeLike>;
  pos?: FileLocation;
}
export interface JsxFragment {
  readonly kind: 'JsxFragment';
  readonly openingFragment: JsxOpeningFragment;
  readonly children: NodeArray<JsxChild>;
  readonly closingFragment: JsxClosingFragment;
  pos?: FileLocation;
}
export interface JsxOpeningFragment {
  readonly kind: 'JsxOpeningFragment';
  pos?: FileLocation;
}
export interface JsxClosingFragment {
  readonly kind: 'JsxClosingFragment';
  pos?: FileLocation;
}
export type JsxAttributeValue =
  | StringLiteral
  | JsxExpression
  | JsxElement
  | JsxSelfClosingElement
  | JsxFragment;
export interface JsxExpression {
  readonly kind: 'JsxExpression';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly expression?: Expression;
  pos?: FileLocation;
}
export interface NotEmittedStatement {
  readonly kind: 'NotEmittedStatement';
  pos?: FileLocation;
}
export interface CommaListExpression {
  readonly kind: 'CommaListExpression';
  readonly elements: NodeArray<Expression>;
  pos?: FileLocation;
}
export interface MissingDeclaration {
  readonly kind: 'MissingDeclaration';
  readonly name?: Identifier;
  pos?: FileLocation;
}
export type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
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
}
export interface ModuleBlock {
  readonly kind: 'ModuleBlock';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
}
export type CaseOrDefaultClause = CaseClause | DefaultClause;
export type IterationStatement =
  | DoStatement
  | WhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement;
export type ForInitializer = VariableDeclarationList | Expression;
export type ForInOrOfStatement = ForInStatement | ForOfStatement;
export type BreakOrContinueStatement = BreakStatement | ContinueStatement;
export interface CaseBlock {
  readonly kind: 'CaseBlock';
  readonly clauses: NodeArray<CaseOrDefaultClause>;
  pos?: FileLocation;
}
export interface DefaultClause {
  readonly kind: 'DefaultClause';
  readonly statements: NodeArray<Statement>;
  pos?: FileLocation;
}
export interface CatchClause {
  readonly kind: 'CatchClause';
  readonly variableDeclaration?: VariableDeclaration;
  readonly block: Block;
  pos?: FileLocation;
}
export type ObjectTypeDeclaration =
  | ClassLikeDeclaration
  | InterfaceDeclaration
  | TypeLiteralNode;
export type DeclarationWithTypeParameters =
  | DeclarationWithTypeParameterChildren
  | JSDocTypedefTag
  | JSDocCallbackTag
  | JSDocSignature;
export type DeclarationWithTypeParameterChildren =
  | SignatureDeclaration
  | ClassLikeDeclaration
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | JSDocTemplateTag;
export interface JSDocTypedefTag {
  readonly kind: 'JSDocTypedefTag';
  readonly fullName?: JSDocNamespaceDeclaration | Identifier;
  readonly name?: Identifier;
  readonly typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocCallbackTag {
  readonly kind: 'JSDocCallbackTag';
  readonly fullName?: JSDocNamespaceDeclaration | Identifier;
  readonly name?: Identifier;
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocTemplateTag {
  readonly kind: 'JSDocTemplateTag';
  readonly constraint: JSDocTypeExpression | undefined;
  readonly typeParameters: NodeArray<TypeParameterDeclaration>;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export type ClassLikeDeclarationBase = ClassDeclaration | ClassExpression;
export interface HeritageClause {
  readonly kind: 'HeritageClause';
  readonly token: 'ExtendsKeyword' | 'ImplementsKeyword';
  readonly types: NodeArray<ExpressionWithTypeArguments>;
  pos?: FileLocation;
}
export type ModuleName = Identifier | StringLiteral;
export type ModuleBody = NamespaceBody | JSDocNamespaceBody;
export type NamespaceBody = ModuleBlock | NamespaceDeclaration;
export type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
export interface JSDocNamespaceDeclaration {
  readonly name: Identifier;
  readonly body?: JSDocNamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  pos?: FileLocation;
}
export interface NamespaceDeclaration {
  readonly name: Identifier;
  readonly body: NamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  pos?: FileLocation;
}
export type ModuleReference = EntityName | ExternalModuleReference;
export interface ExternalModuleReference {
  readonly kind: 'ExternalModuleReference';
  readonly expression: Expression;
  pos?: FileLocation;
}
export interface ImportClause {
  readonly kind: 'ImportClause';
  readonly isTypeOnly: boolean;
  readonly name?: Identifier;
  readonly namedBindings?: NamedImportBindings;
  pos?: FileLocation;
}
export type NamedImportBindings = NamespaceImport | NamedImports;
export interface NamespaceImport {
  readonly kind: 'NamespaceImport';
  readonly name: Identifier;
  pos?: FileLocation;
}
export interface NamedImports {
  readonly kind: 'NamedImports';
  readonly elements: NodeArray<ImportSpecifier>;
  pos?: FileLocation;
}
export type NamedExportBindings = NamespaceExport | NamedExports;
export interface NamespaceExport {
  readonly kind: 'NamespaceExport';
  readonly name: Identifier;
  pos?: FileLocation;
}
export interface NamedExports {
  readonly kind: 'NamedExports';
  readonly elements: NodeArray<ExportSpecifier>;
  pos?: FileLocation;
}
export type AssertionKey = Identifier | StringLiteral;
export interface AssertEntry {
  readonly kind: 'AssertEntry';
  readonly name: AssertionKey;
  readonly value: Expression;
  pos?: FileLocation;
}
export interface ImportSpecifier {
  readonly kind: 'ImportSpecifier';
  readonly propertyName?: Identifier;
  readonly name: Identifier;
  readonly isTypeOnly: boolean;
  pos?: FileLocation;
}
export type NamedImportsOrExports = NamedImports | NamedExports;
export type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
export type TypeOnlyCompatibleAliasDeclaration =
  | ImportClause
  | ImportEqualsDeclaration
  | NamespaceImport
  | ImportOrExportSpecifier
  | ExportDeclaration
  | NamespaceExport;
export interface JSDocNameReference {
  readonly kind: 'JSDocNameReference';
  readonly name: EntityName | JSDocMemberName;
  pos?: FileLocation;
}
export interface JSDocMemberName {
  readonly kind: 'JSDocMemberName';
  readonly left: EntityName | JSDocMemberName;
  readonly right: Identifier;
  pos?: FileLocation;
}
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
export interface JSDocAllType {
  readonly kind: 'JSDocAllType';
  pos?: FileLocation;
}
export interface JSDocUnknownType {
  readonly kind: 'JSDocUnknownType';
  pos?: FileLocation;
}
export interface JSDocNamepathType {
  readonly kind: 'JSDocNamepathType';
  readonly type: TypeNode;
  pos?: FileLocation;
}
export type JSDocTypeReferencingNode =
  | JSDocVariadicType
  | JSDocOptionalType
  | JSDocNullableType
  | JSDocNonNullableType;
export interface JSDoc {
  readonly kind: 'JSDoc';
  readonly tags?: NodeArray<JSDocTag>;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
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
export type JSDocComment =
  | JSDocText
  | JSDocLink
  | JSDocLinkCode
  | JSDocLinkPlain;
export interface JSDocLink {
  readonly kind: 'JSDocLink';
  readonly name?: EntityName | JSDocMemberName;
  text: string;
  pos?: FileLocation;
}
export interface JSDocLinkCode {
  readonly kind: 'JSDocLinkCode';
  readonly name?: EntityName | JSDocMemberName;
  text: string;
  pos?: FileLocation;
}
export interface JSDocLinkPlain {
  readonly kind: 'JSDocLinkPlain';
  readonly name?: EntityName | JSDocMemberName;
  text: string;
  pos?: FileLocation;
}
export interface JSDocText {
  readonly kind: 'JSDocText';
  text: string;
  pos?: FileLocation;
}
export interface JSDocUnknownTag {
  readonly kind: 'JSDocTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocAugmentsTag {
  readonly kind: 'JSDocAugmentsTag';
  readonly class: ExpressionWithTypeArguments & {
    readonly expression: Identifier | PropertyAccessEntityNameExpression;
  };
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocImplementsTag {
  readonly kind: 'JSDocImplementsTag';
  readonly class: ExpressionWithTypeArguments & {
    readonly expression: Identifier | PropertyAccessEntityNameExpression;
  };
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocAuthorTag {
  readonly kind: 'JSDocAuthorTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocDeprecatedTag {
  kind: 'JSDocDeprecatedTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocClassTag {
  readonly kind: 'JSDocClassTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocPublicTag {
  readonly kind: 'JSDocPublicTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocPrivateTag {
  readonly kind: 'JSDocPrivateTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocProtectedTag {
  readonly kind: 'JSDocProtectedTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocReadonlyTag {
  readonly kind: 'JSDocReadonlyTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocOverrideTag {
  readonly kind: 'JSDocOverrideTag';
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocEnumTag {
  readonly kind: 'JSDocEnumTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocThisTag {
  readonly kind: 'JSDocThisTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocSeeTag {
  readonly kind: 'JSDocSeeTag';
  readonly name?: JSDocNameReference;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocReturnTag {
  readonly kind: 'JSDocReturnTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocTypeTag {
  readonly kind: 'JSDocTypeTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocTypeLiteral {
  readonly kind: 'JSDocTypeLiteral';
  readonly jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
  readonly isArrayType: boolean;
  pos?: FileLocation;
}
export interface JSDocOverloadTag {
  readonly kind: 'JSDocOverloadTag';
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export interface JSDocThrowsTag {
  readonly kind: 'JSDocThrowsTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
export type JSDocPropertyLikeTag = JSDocPropertyTag | JSDocParameterTag;
export interface JSDocSatisfiesTag {
  readonly kind: 'JSDocSatisfiesTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
  readonly comment?: string | NodeArray<JSDocComment>;
  pos?: FileLocation;
}
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
}
export interface JsonObjectExpressionStatement {
  readonly expression: JsonObjectExpression;
  readonly kind: 'ExpressionStatement';
  pos?: FileLocation;
}
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
}
export interface JsonMinusNumericLiteral {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: 'MinusToken';
  readonly operand: NumericLiteral;
  pos?: FileLocation;
}
export type JsonObjectExpression =
  | ObjectLiteralExpression
  | ArrayLiteralExpression
  | JsonMinusNumericLiteral
  | NumericLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral;
export type DestructuringPattern =
  | BindingPattern
  | ObjectLiteralExpression
  | ArrayLiteralExpression;
export interface SyntaxList {
  kind: 'SyntaxList';
  pos?: FileLocation;
}
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
export interface QuestionQuestionToken {
  readonly kind: 'QuestionQuestionToken';
  pos?: FileLocation;
}
export interface AsteriskAsteriskToken {
  readonly kind: 'AsteriskAsteriskToken';
  pos?: FileLocation;
}
export type ExponentiationOperatorToken = AsteriskAsteriskToken;
export interface SlashToken {
  readonly kind: 'SlashToken';
  pos?: FileLocation;
}
export interface PercentToken {
  readonly kind: 'PercentToken';
  pos?: FileLocation;
}
export type MultiplicativeOperatorToken =
  | AsteriskToken
  | SlashToken
  | PercentToken;
export type MultiplicativeOperatorOrHigherToken =
  | ExponentiationOperatorToken
  | MultiplicativeOperatorToken;
export type AdditiveOperatorToken = PlusToken | MinusToken;
export type AdditiveOperatorOrHigherToken =
  | MultiplicativeOperatorOrHigherToken
  | AdditiveOperatorToken;
export interface LessThanLessThanToken {
  readonly kind: 'LessThanLessThanToken';
  pos?: FileLocation;
}
export interface GreaterThanGreaterThanToken {
  readonly kind: 'GreaterThanGreaterThanToken';
  pos?: FileLocation;
}
export interface GreaterThanGreaterThanGreaterThanToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanToken';
  pos?: FileLocation;
}
export type ShiftOperatorToken =
  | LessThanLessThanToken
  | GreaterThanGreaterThanToken
  | GreaterThanGreaterThanGreaterThanToken;
export type ShiftOperatorOrHigherToken =
  | AdditiveOperatorOrHigherToken
  | ShiftOperatorToken;
export interface LessThanToken {
  readonly kind: 'LessThanToken';
  pos?: FileLocation;
}
export interface LessThanEqualsToken {
  readonly kind: 'LessThanEqualsToken';
  pos?: FileLocation;
}
export interface GreaterThanToken {
  readonly kind: 'GreaterThanToken';
  pos?: FileLocation;
}
export interface GreaterThanEqualsToken {
  readonly kind: 'GreaterThanEqualsToken';
  pos?: FileLocation;
}
export interface InstanceOfKeywordToken {
  readonly kind: 'InstanceOfKeyword';
  pos?: FileLocation;
}
export type RelationalOperatorToken =
  | LessThanToken
  | LessThanEqualsToken
  | GreaterThanToken
  | GreaterThanEqualsToken
  | InstanceOfKeywordToken
  | InKeyword;
export type RelationalOperatorOrHigherToken =
  | ShiftOperatorOrHigherToken
  | RelationalOperatorToken;
export interface EqualsEqualsToken {
  readonly kind: 'EqualsEqualsToken';
  pos?: FileLocation;
}
export interface EqualsEqualsEqualsToken {
  readonly kind: 'EqualsEqualsEqualsToken';
  pos?: FileLocation;
}
export interface ExclamationEqualsEqualsToken {
  readonly kind: 'ExclamationEqualsEqualsToken';
  pos?: FileLocation;
}
export interface ExclamationEqualsToken {
  readonly kind: 'ExclamationEqualsToken';
  pos?: FileLocation;
}
export type EqualityOperatorToken =
  | EqualsEqualsToken
  | EqualsEqualsEqualsToken
  | ExclamationEqualsEqualsToken
  | ExclamationEqualsToken;
export type EqualityOperatorOrHigherToken =
  | RelationalOperatorOrHigherToken
  | EqualityOperatorToken;
export interface AmpersandToken {
  readonly kind: 'AmpersandToken';
  pos?: FileLocation;
}
export interface BarToken {
  readonly kind: 'BarToken';
  pos?: FileLocation;
}
export interface CaretToken {
  readonly kind: 'CaretToken';
  pos?: FileLocation;
}
export type BitwiseOperatorToken = AmpersandToken | BarToken | CaretToken;
export type BitwiseOperatorOrHigherToken =
  | EqualityOperatorOrHigherToken
  | BitwiseOperatorToken;
export interface AmpersandAmpersandToken {
  readonly kind: 'AmpersandAmpersandToken';
  pos?: FileLocation;
}
export interface BarBarToken {
  readonly kind: 'BarBarToken';
  pos?: FileLocation;
}
export type LogicalOperatorToken = AmpersandAmpersandToken | BarBarToken;
export type LogicalOperatorOrHigherToken =
  | BitwiseOperatorOrHigherToken
  | LogicalOperatorToken;
export interface PlusEqualsToken {
  readonly kind: 'PlusEqualsToken';
  pos?: FileLocation;
}
export interface MinusEqualsToken {
  readonly kind: 'MinusEqualsToken';
  pos?: FileLocation;
}
export interface AsteriskAsteriskEqualsToken {
  readonly kind: 'AsteriskAsteriskEqualsToken';
  pos?: FileLocation;
}
export interface AsteriskEqualsToken {
  readonly kind: 'AsteriskEqualsToken';
  pos?: FileLocation;
}
export interface SlashEqualsToken {
  readonly kind: 'SlashEqualsToken';
  pos?: FileLocation;
}
export interface PercentEqualsToken {
  readonly kind: 'PercentEqualsToken';
  pos?: FileLocation;
}
export interface AmpersandEqualsToken {
  readonly kind: 'AmpersandEqualsToken';
  pos?: FileLocation;
}
export interface BarEqualsToken {
  readonly kind: 'BarEqualsToken';
  pos?: FileLocation;
}
export interface CaretEqualsToken {
  readonly kind: 'CaretEqualsToken';
  pos?: FileLocation;
}
export interface LessThanLessThanEqualsToken {
  readonly kind: 'LessThanLessThanEqualsToken';
  pos?: FileLocation;
}
export interface GreaterThanGreaterThanGreaterThanEqualsToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanEqualsToken';
  pos?: FileLocation;
}
export interface GreaterThanGreaterThanEqualsToken {
  readonly kind: 'GreaterThanGreaterThanEqualsToken';
  pos?: FileLocation;
}
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
export type AssignmentOperatorOrHigherToken =
  | QuestionQuestionToken
  | LogicalOperatorOrHigherToken
  | AssignmentOperatorToken;
export interface CommaToken {
  readonly kind: 'CommaToken';
  pos?: FileLocation;
}
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
export interface OpenBraceToken {
  readonly kind: 'OpenBraceToken';
  pos?: FileLocation;
}
export interface CloseBraceToken {
  readonly kind: 'CloseBraceToken';
  pos?: FileLocation;
}
export interface OpenParenToken {
  readonly kind: 'OpenParenToken';
  pos?: FileLocation;
}
export interface CloseParenToken {
  readonly kind: 'CloseParenToken';
  pos?: FileLocation;
}
export interface OpenBracketToken {
  readonly kind: 'OpenBracketToken';
  pos?: FileLocation;
}
export interface CloseBracketToken {
  readonly kind: 'CloseBracketToken';
  pos?: FileLocation;
}
export interface SemicolonToken {
  readonly kind: 'SemicolonToken';
  pos?: FileLocation;
}
export interface LessThanSlashToken {
  readonly kind: 'LessThanSlashToken';
  pos?: FileLocation;
}
export interface PlusPlusToken {
  readonly kind: 'PlusPlusToken';
  pos?: FileLocation;
}
export interface MinusMinusToken {
  readonly kind: 'MinusMinusToken';
  pos?: FileLocation;
}
export interface TildeToken {
  readonly kind: 'TildeToken';
  pos?: FileLocation;
}
export interface AtToken {
  readonly kind: 'AtToken';
  pos?: FileLocation;
}
export interface BacktickToken {
  readonly kind: 'BacktickToken';
  pos?: FileLocation;
}
export interface HashToken {
  readonly kind: 'HashToken';
  pos?: FileLocation;
}
export interface AnyKeywordToken {
  readonly kind: 'AnyKeyword';
  pos?: FileLocation;
}
export interface AsKeywordToken {
  readonly kind: 'AsKeyword';
  pos?: FileLocation;
}
export interface BigIntKeywordToken {
  readonly kind: 'BigIntKeyword';
  pos?: FileLocation;
}
export interface BooleanKeywordToken {
  readonly kind: 'BooleanKeyword';
  pos?: FileLocation;
}
export interface BreakKeywordToken {
  readonly kind: 'BreakKeyword';
  pos?: FileLocation;
}
export interface CatchKeywordToken {
  readonly kind: 'CatchKeyword';
  pos?: FileLocation;
}
export interface ClassKeywordToken {
  readonly kind: 'ClassKeyword';
  pos?: FileLocation;
}
export interface ConstructorKeywordToken {
  readonly kind: 'ConstructorKeyword';
  pos?: FileLocation;
}
export interface ContinueKeywordToken {
  readonly kind: 'ContinueKeyword';
  pos?: FileLocation;
}
export interface DebuggerKeywordToken {
  readonly kind: 'DebuggerKeyword';
  pos?: FileLocation;
}
export interface DeleteKeywordToken {
  readonly kind: 'DeleteKeyword';
  pos?: FileLocation;
}
export interface DoKeywordToken {
  readonly kind: 'DoKeyword';
  pos?: FileLocation;
}
export interface ElseKeywordToken {
  readonly kind: 'ElseKeyword';
  pos?: FileLocation;
}
export interface EnumKeywordToken {
  readonly kind: 'EnumKeyword';
  pos?: FileLocation;
}
export interface ExtendsKeywordToken {
  readonly kind: 'ExtendsKeyword';
  pos?: FileLocation;
}
export interface FalseKeywordToken {
  readonly kind: 'FalseKeyword';
  pos?: FileLocation;
}
export interface FinallyKeywordToken {
  readonly kind: 'FinallyKeyword';
  pos?: FileLocation;
}
export interface ForKeywordToken {
  readonly kind: 'ForKeyword';
  pos?: FileLocation;
}
export interface FromKeywordToken {
  readonly kind: 'FromKeyword';
  pos?: FileLocation;
}
export interface FunctionKeywordToken {
  readonly kind: 'FunctionKeyword';
  pos?: FileLocation;
}
export interface GetKeywordToken {
  readonly kind: 'GetKeyword';
  pos?: FileLocation;
}
export interface GlobalKeywordToken {
  readonly kind: 'GlobalKeyword';
  pos?: FileLocation;
}
export interface IfKeywordToken {
  readonly kind: 'IfKeyword';
  pos?: FileLocation;
}
export interface ImplementsKeywordToken {
  readonly kind: 'ImplementsKeyword';
  pos?: FileLocation;
}
export interface ImportKeywordToken {
  readonly kind: 'ImportKeyword';
  pos?: FileLocation;
}
export interface InferKeywordToken {
  readonly kind: 'InferKeyword';
  pos?: FileLocation;
}
export interface InterfaceKeywordToken {
  readonly kind: 'InterfaceKeyword';
  pos?: FileLocation;
}
export interface IntrinsicKeywordToken {
  readonly kind: 'IntrinsicKeyword';
  pos?: FileLocation;
}
export interface IsKeywordToken {
  readonly kind: 'IsKeyword';
  pos?: FileLocation;
}
export interface KeyOfKeywordToken {
  readonly kind: 'KeyOfKeyword';
  pos?: FileLocation;
}
export interface LetKeywordToken {
  readonly kind: 'LetKeyword';
  pos?: FileLocation;
}
export interface ModuleKeywordToken {
  readonly kind: 'ModuleKeyword';
  pos?: FileLocation;
}
export interface NamespaceKeywordToken {
  readonly kind: 'NamespaceKeyword';
  pos?: FileLocation;
}
export interface NeverKeywordToken {
  readonly kind: 'NeverKeyword';
  pos?: FileLocation;
}
export interface NewKeywordToken {
  readonly kind: 'NewKeyword';
  pos?: FileLocation;
}
export interface NullKeywordToken {
  readonly kind: 'NullKeyword';
  pos?: FileLocation;
}
export interface NumberKeywordToken {
  readonly kind: 'NumberKeyword';
  pos?: FileLocation;
}
export interface ObjectKeywordToken {
  readonly kind: 'ObjectKeyword';
  pos?: FileLocation;
}
export interface OfKeywordToken {
  readonly kind: 'OfKeyword';
  pos?: FileLocation;
}
export interface PackageKeywordToken {
  readonly kind: 'PackageKeyword';
  pos?: FileLocation;
}
export interface RequireKeywordToken {
  readonly kind: 'RequireKeyword';
  pos?: FileLocation;
}
export interface ReturnKeywordToken {
  readonly kind: 'ReturnKeyword';
  pos?: FileLocation;
}
export interface SatisfiesKeywordToken {
  readonly kind: 'SatisfiesKeyword';
  pos?: FileLocation;
}
export interface SetKeywordToken {
  readonly kind: 'SetKeyword';
  pos?: FileLocation;
}
export interface StringKeywordToken {
  readonly kind: 'StringKeyword';
  pos?: FileLocation;
}
export interface SuperKeywordToken {
  readonly kind: 'SuperKeyword';
  pos?: FileLocation;
}
export interface SwitchKeywordToken {
  readonly kind: 'SwitchKeyword';
  pos?: FileLocation;
}
export interface SymbolKeywordToken {
  readonly kind: 'SymbolKeyword';
  pos?: FileLocation;
}
export interface ThisKeywordToken {
  readonly kind: 'ThisKeyword';
  pos?: FileLocation;
}
export interface ThrowKeywordToken {
  readonly kind: 'ThrowKeyword';
  pos?: FileLocation;
}
export interface TrueKeywordToken {
  readonly kind: 'TrueKeyword';
  pos?: FileLocation;
}
export interface TryKeywordToken {
  readonly kind: 'TryKeyword';
  pos?: FileLocation;
}
export interface TypeKeywordToken {
  readonly kind: 'TypeKeyword';
  pos?: FileLocation;
}
export interface TypeOfKeywordToken {
  readonly kind: 'TypeOfKeyword';
  pos?: FileLocation;
}
export interface UndefinedKeywordToken {
  readonly kind: 'UndefinedKeyword';
  pos?: FileLocation;
}
export interface UniqueKeywordToken {
  readonly kind: 'UniqueKeyword';
  pos?: FileLocation;
}
export interface UnknownKeywordToken {
  readonly kind: 'UnknownKeyword';
  pos?: FileLocation;
}
export interface VarKeywordToken {
  readonly kind: 'VarKeyword';
  pos?: FileLocation;
}
export interface VoidKeywordToken {
  readonly kind: 'VoidKeyword';
  pos?: FileLocation;
}
export interface WhileKeywordToken {
  readonly kind: 'WhileKeyword';
  pos?: FileLocation;
}
export interface WithKeywordToken {
  readonly kind: 'WithKeyword';
  pos?: FileLocation;
}
export interface YieldKeywordToken {
  readonly kind: 'YieldKeyword';
  pos?: FileLocation;
}
