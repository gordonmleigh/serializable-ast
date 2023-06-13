export type NodeArray<T> = readonly T[];
// SyntaxKindUnion
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
// SyntaxKindUnion
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
// SyntaxKindUnion
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
// SyntaxKindUnion
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
// NodeGroup
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
// NodeGroup
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
// NodeGroup
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
  | JSDocSignature;
// NodeGroup
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
// NodeUnion
export type AccessorDeclaration =
  | GetAccessorDeclaration
  | SetAccessorDeclaration;
// NodeType
export interface ArrowFunction {
  readonly kind: 'ArrowFunction';
  readonly modifiers?: NodeArray<Modifier>;
  readonly equalsGreaterThanToken: EqualsGreaterThanToken;
  readonly body: ConciseBody;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface BinaryExpression {
  readonly kind: 'BinaryExpression';
  readonly left: Expression;
  readonly operatorToken: BinaryOperatorToken;
  readonly right: Expression;
}
// NodeType
export interface Block {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
}
// NodeType
export interface BreakStatement {
  readonly kind: 'BreakStatement';
  readonly label?: Identifier;
}
// NodeType
export interface CallSignatureDeclaration {
  readonly kind: 'CallSignature';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface CaseClause {
  readonly kind: 'CaseClause';
  readonly expression: Expression;
  readonly statements: NodeArray<Statement>;
}
// NodeUnion
export type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
// NodeType
export interface ClassStaticBlockDeclaration {
  readonly kind: 'ClassStaticBlockDeclaration';
  readonly body: Block;
  readonly name?: PropertyName;
}
// NodeType
export interface ConstructorDeclaration {
  readonly kind: 'Constructor';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface ConstructorTypeNode {
  readonly kind: 'ConstructorType';
  readonly modifiers?: NodeArray<Modifier>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface ConstructSignatureDeclaration {
  readonly kind: 'ConstructSignature';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface ContinueStatement {
  readonly kind: 'ContinueStatement';
  readonly label?: Identifier;
}
// NodeType
export interface DebuggerStatement {
  readonly kind: 'DebuggerStatement';
}
// NodeType
export interface DoStatement {
  readonly kind: 'DoStatement';
  readonly expression: Expression;
  readonly statement: Statement;
}
// NodeType
export interface ElementAccessExpression {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
}
// NodeType
export interface EmptyStatement {
  readonly kind: 'EmptyStatement';
}
// NodeType
export interface EnumDeclaration {
  readonly kind: 'EnumDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly members: NodeArray<EnumMember>;
}
// NodeType
export interface EnumMember {
  readonly kind: 'EnumMember';
  readonly name: PropertyName;
  readonly initializer?: Expression;
}
// NodeType
export interface ExportAssignment {
  readonly kind: 'ExportAssignment';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly expression: Expression;
  readonly name?: DeclarationName;
}
// NodeType
export interface ExportDeclaration {
  readonly kind: 'ExportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly exportClause?: NamedExportBindings;
  readonly moduleSpecifier?: Expression;
  readonly assertClause?: AssertClause;
  readonly name?: DeclarationName;
}
// NodeType
export interface ExportSpecifier {
  readonly kind: 'ExportSpecifier';
  readonly propertyName?: Identifier;
  readonly name: Identifier;
}
// NodeType
export interface ExpressionStatement {
  readonly kind: 'ExpressionStatement';
  readonly expression: Expression;
}
// NodeType
export interface ForInStatement {
  readonly kind: 'ForInStatement';
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
}
// NodeType
export interface ForOfStatement {
  readonly kind: 'ForOfStatement';
  readonly awaitModifier?: AwaitKeyword;
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
}
// NodeType
export interface ForStatement {
  readonly kind: 'ForStatement';
  readonly initializer?: ForInitializer;
  readonly condition?: Expression;
  readonly incrementor?: Expression;
  readonly statement: Statement;
}
// NodeType
export interface FunctionDeclaration {
  readonly kind: 'FunctionDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly body?: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface FunctionExpression {
  readonly kind: 'FunctionExpression';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name?: Identifier;
  readonly body: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface FunctionTypeNode {
  readonly kind: 'FunctionType';
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface Identifier {
  readonly kind: 'Identifier';
  readonly originalKeywordKind?: string;
}
// NodeType
export interface IfStatement {
  readonly kind: 'IfStatement';
  readonly expression: Expression;
  readonly thenStatement: Statement;
  readonly elseStatement?: Statement;
}
// NodeType
export interface ImportDeclaration {
  readonly kind: 'ImportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly importClause?: ImportClause;
  readonly moduleSpecifier: Expression;
  readonly assertClause?: AssertClause;
}
// NodeType
export interface ImportEqualsDeclaration {
  readonly kind: 'ImportEqualsDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly moduleReference: ModuleReference;
}
// NodeType
export interface IndexSignatureDeclaration {
  readonly kind: 'IndexSignature';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface InterfaceDeclaration {
  readonly kind: 'InterfaceDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<TypeElement>;
}
// NodeType
export interface JSDocFunctionType {
  readonly kind: 'JSDocFunctionType';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface JSDocSignature {
  readonly kind: 'JSDocSignature';
}
// NodeType
export interface LabeledStatement {
  readonly kind: 'LabeledStatement';
  readonly label: Identifier;
  readonly statement: Statement;
}
// NodeType
export interface MethodDeclaration {
  readonly kind: 'MethodDeclaration';
  readonly name: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface MethodSignature {
  readonly kind: 'MethodSignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface ModuleDeclaration {
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: ModuleName;
}
// NodeType
export interface NamedTupleMember {
  readonly kind: 'NamedTupleMember';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: Identifier;
  readonly questionToken?: QuestionToken;
  readonly type: TypeNode;
}
// NodeType
export interface NamespaceExportDeclaration {
  readonly kind: 'NamespaceExportDeclaration';
  readonly name: Identifier;
}
// NodeType
export interface ObjectLiteralExpression {
  readonly kind: 'ObjectLiteralExpression';
  readonly properties: NodeArray<ObjectLiteralElementLike>;
}
// NodeType
export interface ParameterDeclaration {
  readonly kind: 'Parameter';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
// NodeType
export interface ParenthesizedExpression {
  readonly kind: 'ParenthesizedExpression';
  readonly expression: Expression;
}
// NodeType
export interface PropertyAccessExpression {
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
}
// NodeType
export interface PropertyAssignment {
  readonly kind: 'PropertyAssignment';
  readonly name: PropertyName;
  readonly initializer: Expression;
}
// NodeType
export interface PropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
// NodeType
export interface PropertySignature {
  readonly kind: 'PropertySignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
}
// NodeType
export interface ReturnStatement {
  readonly kind: 'ReturnStatement';
  readonly expression?: Expression;
}
// NodeType
export interface ShorthandPropertyAssignment {
  readonly kind: 'ShorthandPropertyAssignment';
  readonly name: Identifier;
  readonly equalsToken?: EqualsToken;
  readonly objectAssignmentInitializer?: Expression;
}
// NodeType
export interface SpreadAssignment {
  readonly kind: 'SpreadAssignment';
  readonly expression: Expression;
  readonly name?: PropertyName;
}
// NodeType
export interface SwitchStatement {
  readonly kind: 'SwitchStatement';
  readonly expression: Expression;
  readonly caseBlock: CaseBlock;
}
// NodeType
export interface ThrowStatement {
  readonly kind: 'ThrowStatement';
  readonly expression: Expression;
}
// NodeType
export interface TryStatement {
  readonly kind: 'TryStatement';
  readonly tryBlock: Block;
  readonly catchClause?: CatchClause;
  readonly finallyBlock?: Block;
}
// NodeType
export interface TypeAliasDeclaration {
  readonly kind: 'TypeAliasDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly type: TypeNode;
}
// NodeType
export interface TypeParameterDeclaration {
  readonly kind: 'TypeParameter';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: Identifier;
  readonly constraint?: TypeNode;
  readonly default?: TypeNode;
  expression?: Expression;
}
// NodeType
export interface VariableDeclaration {
  readonly kind: 'VariableDeclaration';
  readonly name: BindingName;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
// NodeType
export interface VariableStatement {
  readonly kind: 'VariableStatement';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly declarationList: VariableDeclarationList;
}
// NodeType
export interface WhileStatement {
  readonly kind: 'WhileStatement';
  readonly expression: Expression;
  readonly statement: Statement;
}
// NodeType
export interface WithStatement {
  readonly kind: 'WithStatement';
  readonly expression: Expression;
  readonly statement: Statement;
}
// NodeUnion
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
// NodeUnion
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
// NodeType
export interface TypePredicateNode {
  readonly kind: 'TypePredicate';
  readonly assertsModifier?: AssertsKeyword;
  readonly type?: TypeNode;
}
// NodeType
export interface ParenthesizedTypeNode {
  readonly kind: 'ParenthesizedType';
  readonly type: TypeNode;
}
// NodeType
export interface TypeOperatorNode {
  readonly kind: 'TypeOperator';
  readonly type: TypeNode;
}
// NodeType
export interface MappedTypeNode {
  readonly kind: 'MappedType';
  readonly typeParameter: TypeParameterDeclaration;
  readonly nameType?: TypeNode;
  readonly type?: TypeNode;
  readonly members?: NodeArray<TypeElement>;
}
// NodeUnion
export type AssertionExpression = TypeAssertion | AsExpression;
// NodeType
export interface JSDocTypeExpression {
  readonly kind: 'JSDocTypeExpression';
  readonly type: TypeNode;
}
// NodeType
export interface JSDocNonNullableType {
  readonly kind: 'JSDocNonNullableType';
  readonly type: TypeNode;
}
// NodeType
export interface JSDocNullableType {
  readonly kind: 'JSDocNullableType';
  readonly type: TypeNode;
}
// NodeType
export interface JSDocOptionalType {
  readonly kind: 'JSDocOptionalType';
  readonly type: TypeNode;
}
// NodeType
export interface JSDocVariadicType {
  readonly kind: 'JSDocVariadicType';
  readonly type: TypeNode;
}
// NodeUnion
export type HasTypeArguments =
  | CallExpression
  | NewExpression
  | TaggedTemplateExpression
  | JsxOpeningElement
  | JsxSelfClosingElement;
// NodeType
export interface CallExpression {
  readonly kind: 'CallExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
}
// NodeType
export interface NewExpression {
  readonly kind: 'NewExpression';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments?: NodeArray<Expression>;
}
// NodeType
export interface TaggedTemplateExpression {
  readonly kind: 'TaggedTemplateExpression';
  readonly tag: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly template: TemplateLiteral;
}
// NodeType
export interface JsxOpeningElement {
  readonly kind: 'JsxOpeningElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
}
// NodeType
export interface JsxSelfClosingElement {
  readonly kind: 'JsxSelfClosingElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
}
// NodeUnion
export type HasInitializer =
  | HasExpressionInitializer
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | JsxAttribute;
// NodeUnion
export type HasExpressionInitializer =
  | VariableDeclaration
  | ParameterDeclaration
  | BindingElement
  | PropertyDeclaration
  | PropertyAssignment
  | EnumMember;
// NodeType
export interface JsxAttribute {
  readonly kind: 'JsxAttribute';
  readonly name: Identifier;
  readonly initializer?: JsxAttributeValue;
}
// NodeType
export interface BindingElement {
  readonly kind: 'BindingElement';
  readonly propertyName?: PropertyName;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly initializer?: Expression;
}
// NodeUnion
export type HasDecorators =
  | ParameterDeclaration
  | PropertyDeclaration
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ClassExpression
  | ClassDeclaration;
// NodeType
export interface GetAccessorDeclaration {
  readonly kind: 'GetAccessor';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly body?: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface SetAccessorDeclaration {
  readonly kind: 'SetAccessor';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly body?: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
// NodeType
export interface ClassExpression {
  readonly kind: 'ClassExpression';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
}
// NodeType
export interface ClassDeclaration {
  readonly kind: 'ClassDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
}
// NodeUnion
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
// TokenGroup
export type Token =
  | PunctuationToken
  | KeywordToken
  | BinaryOperatorToken
  | AssignmentOperatorToken
  | EndOfFileTokenToken
  | PunctuationSyntaxKindToken
  | KeywordSyntaxKindToken
  | QuestionQuestionTokenToken
  | AsteriskAsteriskTokenToken
  | SlashTokenToken
  | PercentTokenToken
  | MultiplicativeOperatorToken
  | MultiplicativeOperatorOrHigherToken
  | AdditiveOperatorToken
  | AdditiveOperatorOrHigherToken
  | LessThanLessThanTokenToken
  | GreaterThanGreaterThanTokenToken
  | GreaterThanGreaterThanGreaterThanTokenToken
  | ShiftOperatorToken
  | ShiftOperatorOrHigherToken
  | LessThanTokenToken
  | LessThanEqualsTokenToken
  | GreaterThanTokenToken
  | GreaterThanEqualsTokenToken
  | InstanceOfKeywordToken
  | RelationalOperatorToken
  | RelationalOperatorOrHigherToken
  | EqualsEqualsTokenToken
  | EqualsEqualsEqualsTokenToken
  | ExclamationEqualsEqualsTokenToken
  | ExclamationEqualsTokenToken
  | EqualityOperatorToken
  | EqualityOperatorOrHigherToken
  | AmpersandTokenToken
  | BarTokenToken
  | CaretTokenToken
  | BitwiseOperatorToken
  | BitwiseOperatorOrHigherToken
  | AmpersandAmpersandTokenToken
  | BarBarTokenToken
  | LogicalOperatorToken
  | LogicalOperatorOrHigherToken
  | PlusEqualsTokenToken
  | MinusEqualsTokenToken
  | AsteriskAsteriskEqualsTokenToken
  | AsteriskEqualsTokenToken
  | SlashEqualsTokenToken
  | PercentEqualsTokenToken
  | AmpersandEqualsTokenToken
  | BarEqualsTokenToken
  | CaretEqualsTokenToken
  | LessThanLessThanEqualsTokenToken
  | GreaterThanGreaterThanGreaterThanEqualsTokenToken
  | GreaterThanGreaterThanEqualsTokenToken
  | CompoundAssignmentOperatorToken
  | AssignmentOperatorOrHigherToken
  | CommaTokenToken
  | OpenBraceTokenToken
  | CloseBraceTokenToken
  | OpenParenTokenToken
  | CloseParenTokenToken
  | OpenBracketTokenToken
  | CloseBracketTokenToken
  | SemicolonTokenToken
  | LessThanSlashTokenToken
  | PlusPlusTokenToken
  | MinusMinusTokenToken
  | TildeTokenToken
  | AtTokenToken
  | BacktickTokenToken
  | HashTokenToken
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
// TokenGroup
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
// NodeType
export interface DotToken {
  readonly kind: 'DotToken';
}
// NodeType
export interface DotDotDotToken {
  readonly kind: 'DotDotDotToken';
}
// NodeType
export interface QuestionToken {
  readonly kind: 'QuestionToken';
}
// NodeType
export interface ExclamationToken {
  readonly kind: 'ExclamationToken';
}
// NodeType
export interface ColonToken {
  readonly kind: 'ColonToken';
}
// NodeType
export interface EqualsToken {
  readonly kind: 'EqualsToken';
}
// NodeType
export interface AmpersandAmpersandEqualsToken {
  readonly kind: 'AmpersandAmpersandEqualsToken';
}
// NodeType
export interface BarBarEqualsToken {
  readonly kind: 'BarBarEqualsToken';
}
// NodeType
export interface QuestionQuestionEqualsToken {
  readonly kind: 'QuestionQuestionEqualsToken';
}
// NodeType
export interface AsteriskToken {
  readonly kind: 'AsteriskToken';
}
// NodeType
export interface EqualsGreaterThanToken {
  readonly kind: 'EqualsGreaterThanToken';
}
// NodeType
export interface PlusToken {
  readonly kind: 'PlusToken';
}
// NodeType
export interface MinusToken {
  readonly kind: 'MinusToken';
}
// NodeType
export interface QuestionDotToken {
  readonly kind: 'QuestionDotToken';
}
// TokenGroup
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
// NodeType
export interface AssertsKeyword {
  readonly kind: 'AssertsKeyword';
}
// NodeType
export interface AssertKeyword {
  readonly kind: 'AssertKeyword';
}
// NodeType
export interface AwaitKeyword {
  readonly kind: 'AwaitKeyword';
}
// NodeType
export interface CaseKeyword {
  readonly kind: 'CaseKeyword';
}
// TokenGroup
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
// NodeType
export interface AbstractKeyword {
  readonly kind: 'AbstractKeyword';
}
// NodeType
export interface AccessorKeyword {
  readonly kind: 'AccessorKeyword';
}
// NodeType
export interface AsyncKeyword {
  readonly kind: 'AsyncKeyword';
}
// NodeType
export interface ConstKeyword {
  readonly kind: 'ConstKeyword';
}
// NodeType
export interface DeclareKeyword {
  readonly kind: 'DeclareKeyword';
}
// NodeType
export interface DefaultKeyword {
  readonly kind: 'DefaultKeyword';
}
// NodeType
export interface ExportKeyword {
  readonly kind: 'ExportKeyword';
}
// NodeType
export interface InKeyword {
  readonly kind: 'InKeyword';
}
// NodeType
export interface PrivateKeyword {
  readonly kind: 'PrivateKeyword';
}
// NodeType
export interface ProtectedKeyword {
  readonly kind: 'ProtectedKeyword';
}
// NodeType
export interface PublicKeyword {
  readonly kind: 'PublicKeyword';
}
// NodeType
export interface ReadonlyKeyword {
  readonly kind: 'ReadonlyKeyword';
}
// NodeType
export interface OutKeyword {
  readonly kind: 'OutKeyword';
}
// NodeType
export interface OverrideKeyword {
  readonly kind: 'OverrideKeyword';
}
// NodeType
export interface StaticKeyword {
  readonly kind: 'StaticKeyword';
}
// NodeUnion
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
// NodeUnion
export type ModifierLike = Modifier | Decorator;
// NodeType
export interface Decorator {
  readonly kind: 'Decorator';
  readonly expression: LeftHandSideExpression;
}
// NodeUnion
export type AccessibilityModifier =
  | PublicKeyword
  | PrivateKeyword
  | ProtectedKeyword;
// NodeUnion
export type ParameterPropertyModifier = AccessibilityModifier | ReadonlyKeyword;
// NodeUnion
export type ClassMemberModifier =
  | AccessibilityModifier
  | ReadonlyKeyword
  | StaticKeyword
  | AccessorKeyword;
// NodeGroup
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
// NodeGroup
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
  | JSDocTypeLiteral;
// NodeType
export interface QualifiedName {
  readonly kind: 'QualifiedName';
  readonly left: EntityName;
  readonly right: Identifier;
}
// NodeUnion
export type EntityName = Identifier | QualifiedName;
// NodeUnion
export type PropertyName =
  | Identifier
  | StringLiteral
  | NumericLiteral
  | ComputedPropertyName
  | PrivateIdentifier;
// NodeType
export interface StringLiteral {
  readonly kind: 'StringLiteral';
}
// NodeType
export interface NumericLiteral {
  readonly kind: 'NumericLiteral';
}
// NodeType
export interface ComputedPropertyName {
  readonly kind: 'ComputedPropertyName';
  readonly expression: Expression;
}
// NodeType
export interface PrivateIdentifier {
  readonly kind: 'PrivateIdentifier';
}
// NodeUnion
export type MemberName = Identifier | PrivateIdentifier;
// NodeUnion
export type DeclarationName =
  | Identifier
  | PrivateIdentifier
  | StringLiteralLike
  | NumericLiteral
  | ComputedPropertyName
  | ElementAccessExpression
  | BindingPattern
  | EntityNameExpression;
// NodeUnion
export type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
// NodeUnion
export type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
// NodeUnion
export type EntityNameExpression =
  | Identifier
  | PropertyAccessEntityNameExpression;
// NodeGroup
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
// NodeGroup
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
// NodeGroup
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
// NodeGroup
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
// NodeGroup
export type LeftHandSideExpression =
  | PartiallyEmittedExpression
  | MemberExpression
  | CallExpression
  | NonNullExpression;
// NodeGroup
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
// NodeGroup
export type SignatureDeclarationBase =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | FunctionLikeDeclarationBase
  | MethodSignature
  | IndexSignatureDeclaration
  | FunctionOrConstructorTypeNodeBase
  | JSDocFunctionType;
// NodeGroup
export type TypeElement =
  | CallSignatureDeclaration
  | ConstructSignatureDeclaration
  | PropertySignature
  | MethodSignature
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration;
// NodeUnion
export type BindingName = Identifier | BindingPattern;
// NodeType
export interface VariableDeclarationList {
  readonly kind: 'VariableDeclarationList';
  readonly declarations: NodeArray<VariableDeclaration>;
}
// NodeGroup
export type ClassElement =
  | PropertyDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | SemicolonClassElement
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | IndexSignatureDeclaration
  | ClassStaticBlockDeclaration;
// NodeType
export interface AutoAccessorPropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
// NodeGroup
export type ObjectLiteralElement =
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | JsxAttribute
  | JsxSpreadAttribute;
// NodeUnion
export type ObjectLiteralElementLike =
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment
  | MethodDeclaration
  | AccessorDeclaration;
// NodeUnion
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
// NodeType
export interface JSDocPropertyTag {
  readonly kind: 'JSDocPropertyTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocParameterTag {
  readonly kind: 'JSDocParameterTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface ObjectBindingPattern {
  readonly kind: 'ObjectBindingPattern';
  readonly elements: NodeArray<BindingElement>;
}
// NodeType
export interface ArrayBindingPattern {
  readonly kind: 'ArrayBindingPattern';
  readonly elements: NodeArray<ArrayBindingElement>;
}
// NodeUnion
export type ArrayBindingElement = BindingElement | OmittedExpression;
// NodeType
export interface OmittedExpression {
  readonly kind: 'OmittedExpression';
}
// NodeGroup
export type FunctionLikeDeclarationBase =
  | FunctionDeclaration
  | MethodDeclaration
  | ConstructorDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | FunctionExpression
  | ArrowFunction;
// NodeUnion
export type FunctionLikeDeclaration =
  | FunctionDeclaration
  | MethodDeclaration
  | GetAccessorDeclaration
  | SetAccessorDeclaration
  | ConstructorDeclaration
  | FunctionExpression
  | ArrowFunction;
// NodeType
export interface FunctionBody {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
}
// NodeType
export interface SemicolonClassElement {
  readonly kind: 'SemicolonClassElement';
  readonly name?: PropertyName;
}
// TokenGroup
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
// NodeType
export interface ImportTypeAssertionContainer {
  readonly kind: 'ImportTypeAssertionContainer';
  readonly assertClause: AssertClause;
}
// NodeType
export interface AssertClause {
  readonly kind: 'AssertClause';
  readonly elements: NodeArray<AssertEntry>;
}
// NodeType
export interface ImportTypeNode {
  readonly kind: 'ImportType';
  readonly argument: TypeNode;
  readonly assertions?: ImportTypeAssertionContainer;
  readonly qualifier?: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
}
// NodeGroup
export type NodeWithTypeArguments =
  | ImportTypeNode
  | TypeReferenceNode
  | TypeQueryNode
  | ExpressionWithTypeArguments;
// NodeType
export interface ThisTypeNode {
  readonly kind: 'ThisType';
}
// NodeUnion
export type FunctionOrConstructorTypeNode =
  | FunctionTypeNode
  | ConstructorTypeNode;
// NodeGroup
export type FunctionOrConstructorTypeNodeBase =
  | FunctionTypeNode
  | ConstructorTypeNode;
// NodeUnion
export type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
// NodeType
export interface TypeReferenceNode {
  readonly kind: 'TypeReference';
  readonly typeName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
}
// NodeType
export interface ExpressionWithTypeArguments {
  readonly kind: 'ExpressionWithTypeArguments';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
}
// NodeType
export interface TypeQueryNode {
  readonly kind: 'TypeQuery';
  readonly exprName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
}
// NodeType
export interface TypeLiteralNode {
  readonly kind: 'TypeLiteral';
  readonly members: NodeArray<TypeElement>;
}
// NodeType
export interface ArrayTypeNode {
  readonly kind: 'ArrayType';
  readonly elementType: TypeNode;
}
// NodeType
export interface TupleTypeNode {
  readonly kind: 'TupleType';
  readonly elements: NodeArray<TypeNode | NamedTupleMember>;
}
// NodeType
export interface OptionalTypeNode {
  readonly kind: 'OptionalType';
  readonly type: TypeNode;
}
// NodeType
export interface RestTypeNode {
  readonly kind: 'RestType';
  readonly type: TypeNode;
}
// NodeUnion
export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
// NodeType
export interface UnionTypeNode {
  readonly kind: 'UnionType';
  readonly types: NodeArray<TypeNode>;
}
// NodeType
export interface IntersectionTypeNode {
  readonly kind: 'IntersectionType';
  readonly types: NodeArray<TypeNode>;
}
// NodeType
export interface ConditionalTypeNode {
  readonly kind: 'ConditionalType';
  readonly checkType: TypeNode;
  readonly extendsType: TypeNode;
  readonly trueType: TypeNode;
  readonly falseType: TypeNode;
}
// NodeType
export interface InferTypeNode {
  readonly kind: 'InferType';
  readonly typeParameter: TypeParameterDeclaration;
}
// NodeType
export interface IndexedAccessTypeNode {
  readonly kind: 'IndexedAccessType';
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
}
// NodeType
export interface LiteralTypeNode {
  readonly kind: 'LiteralType';
}
// NodeGroup
export type LiteralExpression =
  | StringLiteral
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral
  | NumericLiteral
  | BigIntLiteral;
// NodeType
export interface NoSubstitutionTemplateLiteral {
  readonly kind: 'NoSubstitutionTemplateLiteral';
}
// NodeUnion
export type PropertyNameLiteral =
  | Identifier
  | StringLiteralLike
  | NumericLiteral;
// NodeType
export interface TemplateLiteralTypeNode {
  kind: 'TemplateLiteralType';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
}
// NodeType
export interface TemplateHead {
  readonly kind: 'TemplateHead';
}
// NodeType
export interface TemplateLiteralTypeSpan {
  readonly kind: 'TemplateLiteralTypeSpan';
  readonly type: TypeNode;
}
// NodeType
export interface PartiallyEmittedExpression {
  readonly kind: 'PartiallyEmittedExpression';
  readonly expression: Expression;
}
// NodeGroup
export type UnaryExpression =
  | UpdateExpression
  | DeleteExpression
  | TypeOfExpression
  | VoidExpression
  | AwaitExpression
  | TypeAssertion;
// NodeGroup
export type UpdateExpression =
  | PrefixUnaryExpression
  | PostfixUnaryExpression
  | LeftHandSideExpression;
// SyntaxKindUnion
export type PrefixUnaryOperator =
  | 'PlusPlusToken'
  | 'MinusMinusToken'
  | 'PlusToken'
  | 'MinusToken'
  | 'TildeToken'
  | 'ExclamationToken';
// NodeType
export interface PrefixUnaryExpression {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: PrefixUnaryOperator;
  readonly operand: UnaryExpression;
}
// SyntaxKindUnion
export type PostfixUnaryOperator = 'PlusPlusToken' | 'MinusMinusToken';
// NodeType
export interface PostfixUnaryExpression {
  readonly kind: 'PostfixUnaryExpression';
  readonly operand: LeftHandSideExpression;
  readonly operator: PostfixUnaryOperator;
}
// NodeGroup
export type MemberExpression =
  | PrimaryExpression
  | PropertyAccessExpression
  | ElementAccessExpression
  | ExpressionWithTypeArguments
  | TaggedTemplateExpression;
// NodeType
export interface NullLiteral {
  readonly kind: 'NullKeyword';
}
// NodeType
export interface TrueLiteral {
  readonly kind: 'TrueKeyword';
}
// NodeType
export interface FalseLiteral {
  readonly kind: 'FalseKeyword';
}
// NodeUnion
export type BooleanLiteral = TrueLiteral | FalseLiteral;
// NodeType
export interface ThisExpression {
  readonly kind: 'ThisKeyword';
}
// NodeType
export interface SuperExpression {
  readonly kind: 'SuperKeyword';
}
// NodeType
export interface ImportExpression {
  readonly kind: 'ImportKeyword';
}
// NodeType
export interface DeleteExpression {
  readonly kind: 'DeleteExpression';
  readonly expression: UnaryExpression;
}
// NodeType
export interface TypeOfExpression {
  readonly kind: 'TypeOfExpression';
  readonly expression: UnaryExpression;
}
// NodeType
export interface VoidExpression {
  readonly kind: 'VoidExpression';
  readonly expression: UnaryExpression;
}
// NodeType
export interface AwaitExpression {
  readonly kind: 'AwaitExpression';
  readonly expression: UnaryExpression;
}
// NodeType
export interface YieldExpression {
  readonly kind: 'YieldExpression';
  readonly asteriskToken?: AsteriskToken;
  readonly expression?: Expression;
}
// SyntaxKindUnion
export type ExponentiationOperator = 'AsteriskAsteriskToken';
// SyntaxKindUnion
export type MultiplicativeOperator =
  | 'AsteriskToken'
  | 'SlashToken'
  | 'PercentToken';
// SyntaxKindUnion
export type MultiplicativeOperatorOrHigher =
  | ExponentiationOperator
  | MultiplicativeOperator;
// SyntaxKindUnion
export type AdditiveOperator = 'PlusToken' | 'MinusToken';
// SyntaxKindUnion
export type AdditiveOperatorOrHigher =
  | MultiplicativeOperatorOrHigher
  | AdditiveOperator;
// SyntaxKindUnion
export type ShiftOperator =
  | 'LessThanLessThanToken'
  | 'GreaterThanGreaterThanToken'
  | 'GreaterThanGreaterThanGreaterThanToken';
// SyntaxKindUnion
export type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
// SyntaxKindUnion
export type RelationalOperator =
  | 'LessThanToken'
  | 'LessThanEqualsToken'
  | 'GreaterThanToken'
  | 'GreaterThanEqualsToken'
  | 'InstanceOfKeyword'
  | 'InKeyword';
// SyntaxKindUnion
export type RelationalOperatorOrHigher =
  | ShiftOperatorOrHigher
  | RelationalOperator;
// SyntaxKindUnion
export type EqualityOperator =
  | 'EqualsEqualsToken'
  | 'EqualsEqualsEqualsToken'
  | 'ExclamationEqualsEqualsToken'
  | 'ExclamationEqualsToken';
// SyntaxKindUnion
export type EqualityOperatorOrHigher =
  | RelationalOperatorOrHigher
  | EqualityOperator;
// SyntaxKindUnion
export type BitwiseOperator = 'AmpersandToken' | 'BarToken' | 'CaretToken';
// SyntaxKindUnion
export type BitwiseOperatorOrHigher =
  | EqualityOperatorOrHigher
  | BitwiseOperator;
// SyntaxKindUnion
export type LogicalOperator = 'AmpersandAmpersandToken' | 'BarBarToken';
// SyntaxKindUnion
export type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
// SyntaxKindUnion
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
// SyntaxKindUnion
export type AssignmentOperator = 'EqualsToken' | CompoundAssignmentOperator;
// SyntaxKindUnion
export type AssignmentOperatorOrHigher =
  | 'QuestionQuestionToken'
  | LogicalOperatorOrHigher
  | AssignmentOperator;
// SyntaxKindUnion
export type BinaryOperator = AssignmentOperatorOrHigher | 'CommaToken';
// TokenInstance
export type BinaryOperatorToken =
  | AssignmentOperatorOrHigherToken
  | CommaTokenToken;
// TokenInstance
export type AssignmentOperatorToken =
  | EqualsToken
  | CompoundAssignmentOperatorToken;
// NodeType
export interface AssignmentExpression<
  TOperator extends AssignmentOperatorToken,
> {
  readonly left: LeftHandSideExpression;
  readonly operatorToken: TOperator;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
}
// NodeType
export interface ObjectDestructuringAssignment {
  readonly left: ObjectLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
}
// NodeType
export interface ArrayDestructuringAssignment {
  readonly left: ArrayLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
}
// NodeType
export interface ArrayLiteralExpression {
  readonly kind: 'ArrayLiteralExpression';
  readonly elements: NodeArray<Expression>;
}
// NodeUnion
export type DestructuringAssignment =
  | ObjectDestructuringAssignment
  | ArrayDestructuringAssignment;
// NodeUnion
export type BindingOrAssignmentElement =
  | VariableDeclaration
  | ParameterDeclaration
  | ObjectBindingOrAssignmentElement
  | ArrayBindingOrAssignmentElement;
// NodeUnion
export type ObjectBindingOrAssignmentElement =
  | BindingElement
  | PropertyAssignment
  | ShorthandPropertyAssignment
  | SpreadAssignment;
// NodeUnion
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
// NodeType
export interface SpreadElement {
  readonly kind: 'SpreadElement';
  readonly expression: Expression;
}
// NodeUnion
export type BindingOrAssignmentElementRestIndicator =
  | DotDotDotToken
  | SpreadElement
  | SpreadAssignment;
// NodeUnion
export type BindingOrAssignmentElementTarget =
  | BindingOrAssignmentPattern
  | Identifier
  | PropertyAccessExpression
  | ElementAccessExpression
  | OmittedExpression;
// NodeUnion
export type BindingOrAssignmentPattern =
  | ObjectBindingOrAssignmentPattern
  | ArrayBindingOrAssignmentPattern;
// NodeUnion
export type ObjectBindingOrAssignmentPattern =
  | ObjectBindingPattern
  | ObjectLiteralExpression;
// NodeUnion
export type ArrayBindingOrAssignmentPattern =
  | ArrayBindingPattern
  | ArrayLiteralExpression;
// NodeUnion
export type AssignmentPattern =
  | ObjectLiteralExpression
  | ArrayLiteralExpression;
// NodeType
export interface ConditionalExpression {
  readonly kind: 'ConditionalExpression';
  readonly condition: Expression;
  readonly questionToken: QuestionToken;
  readonly whenTrue: Expression;
  readonly colonToken: ColonToken;
  readonly whenFalse: Expression;
}
// NodeUnion
export type ConciseBody = FunctionBody | Expression;
// NodeGroup
export type LiteralLikeNode =
  | TemplateLiteralLikeNode
  | LiteralExpression
  | JsxText;
// NodeGroup
export type TemplateLiteralLikeNode =
  | NoSubstitutionTemplateLiteral
  | TemplateHead
  | TemplateMiddle
  | TemplateTail;
// NodeType
export interface RegularExpressionLiteral {
  readonly kind: 'RegularExpressionLiteral';
}
// NodeType
export interface BigIntLiteral {
  readonly kind: 'BigIntLiteral';
}
// NodeUnion
export type LiteralToken =
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | JsxText
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral;
// NodeType
export interface JsxText {
  readonly kind: 'JsxText';
}
// NodeType
export interface TemplateMiddle {
  readonly kind: 'TemplateMiddle';
}
// NodeType
export interface TemplateTail {
  readonly kind: 'TemplateTail';
}
// NodeUnion
export type PseudoLiteralToken = TemplateHead | TemplateMiddle | TemplateTail;
// NodeUnion
export type TemplateLiteralToken =
  | NoSubstitutionTemplateLiteral
  | PseudoLiteralToken;
// NodeType
export interface TemplateExpression {
  readonly kind: 'TemplateExpression';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateSpan>;
}
// NodeType
export interface TemplateSpan {
  readonly kind: 'TemplateSpan';
  readonly expression: Expression;
}
// NodeUnion
export type TemplateLiteral =
  | TemplateExpression
  | NoSubstitutionTemplateLiteral;
// NodeGroup
export type ObjectLiteralExpressionBase =
  | ObjectLiteralExpression
  | JsxAttributes;
// NodeType
export interface PropertyAccessEntityNameExpression {
  readonly expression: EntityNameExpression;
  readonly name: Identifier;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
}
// NodeUnion
export type EntityNameOrEntityNameExpression =
  | EntityName
  | EntityNameExpression;
// NodeUnion
export type AccessExpression =
  | PropertyAccessExpression
  | ElementAccessExpression;
// NodeType
export interface PropertyAccessChain {
  readonly name: MemberName;
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
}
// NodeType
export interface SuperPropertyAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
}
// NodeType
export interface ElementAccessChain {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
}
// NodeType
export interface SuperElementAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'ElementAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
}
// NodeUnion
export type SuperProperty =
  | SuperPropertyAccessExpression
  | SuperElementAccessExpression;
// NodeType
export interface CallChain {
  readonly kind: 'CallExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
}
// NodeUnion
export type OptionalChain =
  | PropertyAccessChain
  | ElementAccessChain
  | CallChain
  | NonNullChain;
// NodeType
export interface NonNullChain {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
}
// NodeType
export interface SuperCall {
  readonly expression: SuperExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
}
// NodeType
export interface ImportCall {
  readonly expression: ImportExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
}
// NodeUnion
export type CallLikeExpression =
  | CallExpression
  | NewExpression
  | TaggedTemplateExpression
  | Decorator
  | JsxOpeningLikeElement;
// NodeUnion
export type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
// NodeType
export interface AsExpression {
  readonly kind: 'AsExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
}
// NodeType
export interface TypeAssertion {
  readonly kind: 'TypeAssertionExpression';
  readonly type: TypeNode;
  readonly expression: UnaryExpression;
}
// NodeType
export interface SatisfiesExpression {
  readonly kind: 'SatisfiesExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
}
// NodeType
export interface NonNullExpression {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
}
// NodeType
export interface MetaProperty {
  readonly kind: 'MetaProperty';
  readonly name: Identifier;
}
// NodeType
export interface JsxElement {
  readonly kind: 'JsxElement';
  readonly openingElement: JsxOpeningElement;
  readonly children: NodeArray<JsxChild>;
  readonly closingElement: JsxClosingElement;
}
// NodeUnion
export type JsxChild =
  | JsxText
  | JsxExpression
  | JsxElement
  | JsxSelfClosingElement
  | JsxFragment;
// NodeType
export interface JsxClosingElement {
  readonly kind: 'JsxClosingElement';
  readonly tagName: JsxTagNameExpression;
}
// NodeUnion
export type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
// NodeType
export interface JsxSpreadAttribute {
  readonly kind: 'JsxSpreadAttribute';
  readonly expression: Expression;
  readonly name?: PropertyName;
}
// NodeUnion
export type JsxTagNameExpression =
  | Identifier
  | ThisExpression
  | JsxTagNamePropertyAccess;
// NodeType
export interface JsxTagNamePropertyAccess {
  readonly expression: JsxTagNameExpression;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
}
// NodeType
export interface JsxAttributes {
  readonly kind: 'JsxAttributes';
  readonly properties: NodeArray<JsxAttributeLike>;
}
// NodeType
export interface JsxFragment {
  readonly kind: 'JsxFragment';
  readonly openingFragment: JsxOpeningFragment;
  readonly children: NodeArray<JsxChild>;
  readonly closingFragment: JsxClosingFragment;
}
// NodeType
export interface JsxOpeningFragment {
  readonly kind: 'JsxOpeningFragment';
}
// NodeType
export interface JsxClosingFragment {
  readonly kind: 'JsxClosingFragment';
}
// NodeUnion
export type JsxAttributeValue =
  | StringLiteral
  | JsxExpression
  | JsxElement
  | JsxSelfClosingElement
  | JsxFragment;
// NodeType
export interface JsxExpression {
  readonly kind: 'JsxExpression';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly expression?: Expression;
}
// NodeType
export interface NotEmittedStatement {
  readonly kind: 'NotEmittedStatement';
}
// NodeType
export interface CommaListExpression {
  readonly kind: 'CommaListExpression';
  readonly elements: NodeArray<Expression>;
}
// NodeType
export interface MissingDeclaration {
  readonly kind: 'MissingDeclaration';
  readonly name?: Identifier;
}
// NodeType
export interface ModuleBlock {
  readonly kind: 'ModuleBlock';
  readonly statements: NodeArray<Statement>;
}
// NodeUnion
export type CaseOrDefaultClause = CaseClause | DefaultClause;
// NodeGroup
export type IterationStatement =
  | DoStatement
  | WhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement;
// NodeUnion
export type ForInitializer = VariableDeclarationList | Expression;
// NodeUnion
export type ForInOrOfStatement = ForInStatement | ForOfStatement;
// NodeUnion
export type BreakOrContinueStatement = BreakStatement | ContinueStatement;
// NodeType
export interface CaseBlock {
  readonly kind: 'CaseBlock';
  readonly clauses: NodeArray<CaseOrDefaultClause>;
}
// NodeType
export interface DefaultClause {
  readonly kind: 'DefaultClause';
  readonly statements: NodeArray<Statement>;
}
// NodeType
export interface CatchClause {
  readonly kind: 'CatchClause';
  readonly variableDeclaration?: VariableDeclaration;
  readonly block: Block;
}
// NodeUnion
export type ObjectTypeDeclaration =
  | ClassLikeDeclaration
  | InterfaceDeclaration
  | TypeLiteralNode;
// NodeUnion
export type DeclarationWithTypeParameters =
  | DeclarationWithTypeParameterChildren
  | JSDocTypedefTag
  | JSDocCallbackTag
  | JSDocSignature;
// NodeUnion
export type DeclarationWithTypeParameterChildren =
  | SignatureDeclaration
  | ClassLikeDeclaration
  | InterfaceDeclaration
  | TypeAliasDeclaration
  | JSDocTemplateTag;
// NodeType
export interface JSDocTypedefTag {
  readonly kind: 'JSDocTypedefTag';
  readonly name?: Identifier;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocCallbackTag {
  readonly kind: 'JSDocCallbackTag';
  readonly name?: Identifier;
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocTemplateTag {
  readonly kind: 'JSDocTemplateTag';
  readonly typeParameters: NodeArray<TypeParameterDeclaration>;
  readonly tagName: Identifier;
}
// NodeGroup
export type ClassLikeDeclarationBase = ClassDeclaration | ClassExpression;
// NodeType
export interface HeritageClause {
  readonly kind: 'HeritageClause';
  readonly types: NodeArray<ExpressionWithTypeArguments>;
}
// NodeUnion
export type ModuleName = Identifier | StringLiteral;
// NodeUnion
export type ModuleBody = NamespaceBody | JSDocNamespaceBody;
// NodeUnion
export type NamespaceBody = ModuleBlock | NamespaceDeclaration;
// NodeUnion
export type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
// NodeType
export interface NamespaceDeclaration {
  readonly name: Identifier;
  readonly body: NamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
}
// NodeType
export interface JSDocNamespaceDeclaration {
  readonly name: Identifier;
  readonly body?: JSDocNamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
}
// NodeUnion
export type ModuleReference = EntityName | ExternalModuleReference;
// NodeType
export interface ExternalModuleReference {
  readonly kind: 'ExternalModuleReference';
  readonly expression: Expression;
}
// NodeType
export interface ImportClause {
  readonly kind: 'ImportClause';
  readonly name?: Identifier;
  readonly namedBindings?: NamedImportBindings;
}
// NodeUnion
export type NamedImportBindings = NamespaceImport | NamedImports;
// NodeType
export interface NamespaceImport {
  readonly kind: 'NamespaceImport';
  readonly name: Identifier;
}
// NodeType
export interface NamedImports {
  readonly kind: 'NamedImports';
  readonly elements: NodeArray<ImportSpecifier>;
}
// NodeUnion
export type NamedExportBindings = NamespaceExport | NamedExports;
// NodeType
export interface NamespaceExport {
  readonly kind: 'NamespaceExport';
  readonly name: Identifier;
}
// NodeType
export interface NamedExports {
  readonly kind: 'NamedExports';
  readonly elements: NodeArray<ExportSpecifier>;
}
// NodeUnion
export type AssertionKey = Identifier | StringLiteral;
// NodeType
export interface AssertEntry {
  readonly kind: 'AssertEntry';
  readonly name: AssertionKey;
  readonly value: Expression;
}
// NodeType
export interface ImportSpecifier {
  readonly kind: 'ImportSpecifier';
  readonly propertyName?: Identifier;
  readonly name: Identifier;
}
// NodeUnion
export type NamedImportsOrExports = NamedImports | NamedExports;
// NodeUnion
export type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
// NodeUnion
export type TypeOnlyCompatibleAliasDeclaration =
  | ImportClause
  | ImportEqualsDeclaration
  | NamespaceImport
  | ImportOrExportSpecifier
  | ExportDeclaration
  | NamespaceExport;
// NodeType
export interface JSDocNameReference {
  readonly kind: 'JSDocNameReference';
}
// NodeType
export interface JSDocMemberName {
  readonly kind: 'JSDocMemberName';
  readonly right: Identifier;
}
// NodeGroup
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
// NodeType
export interface JSDocAllType {
  readonly kind: 'JSDocAllType';
}
// NodeType
export interface JSDocUnknownType {
  readonly kind: 'JSDocUnknownType';
}
// NodeType
export interface JSDocNamepathType {
  readonly kind: 'JSDocNamepathType';
  readonly type: TypeNode;
}
// NodeUnion
export type JSDocTypeReferencingNode =
  | JSDocVariadicType
  | JSDocOptionalType
  | JSDocNullableType
  | JSDocNonNullableType;
// NodeType
export interface JSDoc {
  readonly kind: 'JSDoc';
  readonly tags?: NodeArray<JSDocTag>;
}
// NodeGroup
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
// NodeType
export interface JSDocLink {
  readonly kind: 'JSDocLink';
}
// NodeType
export interface JSDocLinkCode {
  readonly kind: 'JSDocLinkCode';
}
// NodeType
export interface JSDocLinkPlain {
  readonly kind: 'JSDocLinkPlain';
}
// NodeUnion
export type JSDocComment =
  | JSDocText
  | JSDocLink
  | JSDocLinkCode
  | JSDocLinkPlain;
// NodeType
export interface JSDocText {
  readonly kind: 'JSDocText';
}
// NodeType
export interface JSDocUnknownTag {
  readonly kind: 'JSDocTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocAugmentsTag {
  readonly kind: 'JSDocAugmentsTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocImplementsTag {
  readonly kind: 'JSDocImplementsTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocAuthorTag {
  readonly kind: 'JSDocAuthorTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocDeprecatedTag {
  kind: 'JSDocDeprecatedTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocClassTag {
  readonly kind: 'JSDocClassTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocPublicTag {
  readonly kind: 'JSDocPublicTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocPrivateTag {
  readonly kind: 'JSDocPrivateTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocProtectedTag {
  readonly kind: 'JSDocProtectedTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocReadonlyTag {
  readonly kind: 'JSDocReadonlyTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocOverrideTag {
  readonly kind: 'JSDocOverrideTag';
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocEnumTag {
  readonly kind: 'JSDocEnumTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocThisTag {
  readonly kind: 'JSDocThisTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocSeeTag {
  readonly kind: 'JSDocSeeTag';
  readonly name?: JSDocNameReference;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocReturnTag {
  readonly kind: 'JSDocReturnTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocTypeTag {
  readonly kind: 'JSDocTypeTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocOverloadTag {
  readonly kind: 'JSDocOverloadTag';
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
}
// NodeType
export interface JSDocThrowsTag {
  readonly kind: 'JSDocThrowsTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeGroup
export type JSDocPropertyLikeTag = JSDocPropertyTag | JSDocParameterTag;
// NodeType
export interface JSDocTypeLiteral {
  readonly kind: 'JSDocTypeLiteral';
}
// NodeType
export interface JSDocSatisfiesTag {
  readonly kind: 'JSDocSatisfiesTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
// NodeType
export interface JsonObjectExpressionStatement {
  readonly expression: JsonObjectExpression;
  readonly kind: 'ExpressionStatement';
}
// NodeType
export interface JsonMinusNumericLiteral {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: 'MinusToken';
  readonly operand: NumericLiteral;
}
// NodeUnion
export type JsonObjectExpression =
  | ObjectLiteralExpression
  | ArrayLiteralExpression
  | JsonMinusNumericLiteral
  | NumericLiteral
  | StringLiteral
  | BooleanLiteral
  | NullLiteral;
// NodeUnion
export type DestructuringPattern =
  | BindingPattern
  | ObjectLiteralExpression
  | ArrayLiteralExpression;
// NodeType
export interface SyntaxList {
  kind: 'SyntaxList';
}
// NodeType
export interface EndOfFileTokenToken {
  readonly kind: 'EndOfFileToken';
}
// TokenInstance
export type PunctuationSyntaxKindToken =
  | OpenBraceTokenToken
  | CloseBraceTokenToken
  | OpenParenTokenToken
  | CloseParenTokenToken
  | OpenBracketTokenToken
  | CloseBracketTokenToken
  | DotToken
  | DotDotDotToken
  | SemicolonTokenToken
  | CommaTokenToken
  | QuestionDotToken
  | LessThanTokenToken
  | LessThanSlashTokenToken
  | GreaterThanTokenToken
  | LessThanEqualsTokenToken
  | GreaterThanEqualsTokenToken
  | EqualsEqualsTokenToken
  | ExclamationEqualsTokenToken
  | EqualsEqualsEqualsTokenToken
  | ExclamationEqualsEqualsTokenToken
  | EqualsGreaterThanToken
  | PlusToken
  | MinusToken
  | AsteriskToken
  | AsteriskAsteriskTokenToken
  | SlashTokenToken
  | PercentTokenToken
  | PlusPlusTokenToken
  | MinusMinusTokenToken
  | LessThanLessThanTokenToken
  | GreaterThanGreaterThanTokenToken
  | GreaterThanGreaterThanGreaterThanTokenToken
  | AmpersandTokenToken
  | BarTokenToken
  | CaretTokenToken
  | ExclamationToken
  | TildeTokenToken
  | AmpersandAmpersandTokenToken
  | AmpersandAmpersandEqualsToken
  | BarBarTokenToken
  | BarBarEqualsToken
  | QuestionQuestionTokenToken
  | QuestionQuestionEqualsToken
  | QuestionToken
  | ColonToken
  | AtTokenToken
  | BacktickTokenToken
  | HashTokenToken
  | EqualsToken
  | PlusEqualsTokenToken
  | MinusEqualsTokenToken
  | AsteriskEqualsTokenToken
  | AsteriskAsteriskEqualsTokenToken
  | SlashEqualsTokenToken
  | PercentEqualsTokenToken
  | LessThanLessThanEqualsTokenToken
  | GreaterThanGreaterThanEqualsTokenToken
  | GreaterThanGreaterThanGreaterThanEqualsTokenToken
  | AmpersandEqualsTokenToken
  | BarEqualsTokenToken
  | CaretEqualsTokenToken;
// TokenInstance
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
// NodeType
export interface QuestionQuestionTokenToken {
  readonly kind: 'QuestionQuestionToken';
}
// NodeType
export interface AsteriskAsteriskTokenToken {
  readonly kind: 'AsteriskAsteriskToken';
}
// NodeType
export interface SlashTokenToken {
  readonly kind: 'SlashToken';
}
// NodeType
export interface PercentTokenToken {
  readonly kind: 'PercentToken';
}
// TokenInstance
export type MultiplicativeOperatorToken =
  | AsteriskToken
  | SlashTokenToken
  | PercentTokenToken;
// TokenInstance
export type MultiplicativeOperatorOrHigherToken =
  | ExponentiationOperator
  | MultiplicativeOperatorToken;
// TokenInstance
export type AdditiveOperatorToken = PlusToken | MinusToken;
// TokenInstance
export type AdditiveOperatorOrHigherToken =
  | MultiplicativeOperatorOrHigherToken
  | AdditiveOperatorToken;
// NodeType
export interface LessThanLessThanTokenToken {
  readonly kind: 'LessThanLessThanToken';
}
// NodeType
export interface GreaterThanGreaterThanTokenToken {
  readonly kind: 'GreaterThanGreaterThanToken';
}
// NodeType
export interface GreaterThanGreaterThanGreaterThanTokenToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanToken';
}
// TokenInstance
export type ShiftOperatorToken =
  | LessThanLessThanTokenToken
  | GreaterThanGreaterThanTokenToken
  | GreaterThanGreaterThanGreaterThanTokenToken;
// TokenInstance
export type ShiftOperatorOrHigherToken =
  | AdditiveOperatorOrHigherToken
  | ShiftOperatorToken;
// NodeType
export interface LessThanTokenToken {
  readonly kind: 'LessThanToken';
}
// NodeType
export interface LessThanEqualsTokenToken {
  readonly kind: 'LessThanEqualsToken';
}
// NodeType
export interface GreaterThanTokenToken {
  readonly kind: 'GreaterThanToken';
}
// NodeType
export interface GreaterThanEqualsTokenToken {
  readonly kind: 'GreaterThanEqualsToken';
}
// NodeType
export interface InstanceOfKeywordToken {
  readonly kind: 'InstanceOfKeyword';
}
// TokenInstance
export type RelationalOperatorToken =
  | LessThanTokenToken
  | LessThanEqualsTokenToken
  | GreaterThanTokenToken
  | GreaterThanEqualsTokenToken
  | InstanceOfKeywordToken
  | InKeyword;
// TokenInstance
export type RelationalOperatorOrHigherToken =
  | ShiftOperatorOrHigherToken
  | RelationalOperatorToken;
// NodeType
export interface EqualsEqualsTokenToken {
  readonly kind: 'EqualsEqualsToken';
}
// NodeType
export interface EqualsEqualsEqualsTokenToken {
  readonly kind: 'EqualsEqualsEqualsToken';
}
// NodeType
export interface ExclamationEqualsEqualsTokenToken {
  readonly kind: 'ExclamationEqualsEqualsToken';
}
// NodeType
export interface ExclamationEqualsTokenToken {
  readonly kind: 'ExclamationEqualsToken';
}
// TokenInstance
export type EqualityOperatorToken =
  | EqualsEqualsTokenToken
  | EqualsEqualsEqualsTokenToken
  | ExclamationEqualsEqualsTokenToken
  | ExclamationEqualsTokenToken;
// TokenInstance
export type EqualityOperatorOrHigherToken =
  | RelationalOperatorOrHigherToken
  | EqualityOperatorToken;
// NodeType
export interface AmpersandTokenToken {
  readonly kind: 'AmpersandToken';
}
// NodeType
export interface BarTokenToken {
  readonly kind: 'BarToken';
}
// NodeType
export interface CaretTokenToken {
  readonly kind: 'CaretToken';
}
// TokenInstance
export type BitwiseOperatorToken =
  | AmpersandTokenToken
  | BarTokenToken
  | CaretTokenToken;
// TokenInstance
export type BitwiseOperatorOrHigherToken =
  | EqualityOperatorOrHigherToken
  | BitwiseOperatorToken;
// NodeType
export interface AmpersandAmpersandTokenToken {
  readonly kind: 'AmpersandAmpersandToken';
}
// NodeType
export interface BarBarTokenToken {
  readonly kind: 'BarBarToken';
}
// TokenInstance
export type LogicalOperatorToken =
  | AmpersandAmpersandTokenToken
  | BarBarTokenToken;
// TokenInstance
export type LogicalOperatorOrHigherToken =
  | BitwiseOperatorOrHigherToken
  | LogicalOperatorToken;
// NodeType
export interface PlusEqualsTokenToken {
  readonly kind: 'PlusEqualsToken';
}
// NodeType
export interface MinusEqualsTokenToken {
  readonly kind: 'MinusEqualsToken';
}
// NodeType
export interface AsteriskAsteriskEqualsTokenToken {
  readonly kind: 'AsteriskAsteriskEqualsToken';
}
// NodeType
export interface AsteriskEqualsTokenToken {
  readonly kind: 'AsteriskEqualsToken';
}
// NodeType
export interface SlashEqualsTokenToken {
  readonly kind: 'SlashEqualsToken';
}
// NodeType
export interface PercentEqualsTokenToken {
  readonly kind: 'PercentEqualsToken';
}
// NodeType
export interface AmpersandEqualsTokenToken {
  readonly kind: 'AmpersandEqualsToken';
}
// NodeType
export interface BarEqualsTokenToken {
  readonly kind: 'BarEqualsToken';
}
// NodeType
export interface CaretEqualsTokenToken {
  readonly kind: 'CaretEqualsToken';
}
// NodeType
export interface LessThanLessThanEqualsTokenToken {
  readonly kind: 'LessThanLessThanEqualsToken';
}
// NodeType
export interface GreaterThanGreaterThanGreaterThanEqualsTokenToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanEqualsToken';
}
// NodeType
export interface GreaterThanGreaterThanEqualsTokenToken {
  readonly kind: 'GreaterThanGreaterThanEqualsToken';
}
// TokenInstance
export type CompoundAssignmentOperatorToken =
  | PlusEqualsTokenToken
  | MinusEqualsTokenToken
  | AsteriskAsteriskEqualsTokenToken
  | AsteriskEqualsTokenToken
  | SlashEqualsTokenToken
  | PercentEqualsTokenToken
  | AmpersandEqualsTokenToken
  | BarEqualsTokenToken
  | CaretEqualsTokenToken
  | LessThanLessThanEqualsTokenToken
  | GreaterThanGreaterThanGreaterThanEqualsTokenToken
  | GreaterThanGreaterThanEqualsTokenToken
  | BarBarEqualsToken
  | AmpersandAmpersandEqualsToken
  | QuestionQuestionEqualsToken;
// TokenInstance
export type AssignmentOperatorOrHigherToken =
  | QuestionQuestionTokenToken
  | LogicalOperatorOrHigherToken
  | AssignmentOperatorToken;
// NodeType
export interface CommaTokenToken {
  readonly kind: 'CommaToken';
}
// TokenInstance
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
// TokenInstance
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
// NodeType
export interface OpenBraceTokenToken {
  readonly kind: 'OpenBraceToken';
}
// NodeType
export interface CloseBraceTokenToken {
  readonly kind: 'CloseBraceToken';
}
// NodeType
export interface OpenParenTokenToken {
  readonly kind: 'OpenParenToken';
}
// NodeType
export interface CloseParenTokenToken {
  readonly kind: 'CloseParenToken';
}
// NodeType
export interface OpenBracketTokenToken {
  readonly kind: 'OpenBracketToken';
}
// NodeType
export interface CloseBracketTokenToken {
  readonly kind: 'CloseBracketToken';
}
// NodeType
export interface SemicolonTokenToken {
  readonly kind: 'SemicolonToken';
}
// NodeType
export interface LessThanSlashTokenToken {
  readonly kind: 'LessThanSlashToken';
}
// NodeType
export interface PlusPlusTokenToken {
  readonly kind: 'PlusPlusToken';
}
// NodeType
export interface MinusMinusTokenToken {
  readonly kind: 'MinusMinusToken';
}
// NodeType
export interface TildeTokenToken {
  readonly kind: 'TildeToken';
}
// NodeType
export interface AtTokenToken {
  readonly kind: 'AtToken';
}
// NodeType
export interface BacktickTokenToken {
  readonly kind: 'BacktickToken';
}
// NodeType
export interface HashTokenToken {
  readonly kind: 'HashToken';
}
// NodeType
export interface AnyKeywordToken {
  readonly kind: 'AnyKeyword';
}
// NodeType
export interface AsKeywordToken {
  readonly kind: 'AsKeyword';
}
// NodeType
export interface BigIntKeywordToken {
  readonly kind: 'BigIntKeyword';
}
// NodeType
export interface BooleanKeywordToken {
  readonly kind: 'BooleanKeyword';
}
// NodeType
export interface BreakKeywordToken {
  readonly kind: 'BreakKeyword';
}
// NodeType
export interface CatchKeywordToken {
  readonly kind: 'CatchKeyword';
}
// NodeType
export interface ClassKeywordToken {
  readonly kind: 'ClassKeyword';
}
// NodeType
export interface ConstructorKeywordToken {
  readonly kind: 'ConstructorKeyword';
}
// NodeType
export interface ContinueKeywordToken {
  readonly kind: 'ContinueKeyword';
}
// NodeType
export interface DebuggerKeywordToken {
  readonly kind: 'DebuggerKeyword';
}
// NodeType
export interface DeleteKeywordToken {
  readonly kind: 'DeleteKeyword';
}
// NodeType
export interface DoKeywordToken {
  readonly kind: 'DoKeyword';
}
// NodeType
export interface ElseKeywordToken {
  readonly kind: 'ElseKeyword';
}
// NodeType
export interface EnumKeywordToken {
  readonly kind: 'EnumKeyword';
}
// NodeType
export interface ExtendsKeywordToken {
  readonly kind: 'ExtendsKeyword';
}
// NodeType
export interface FalseKeywordToken {
  readonly kind: 'FalseKeyword';
}
// NodeType
export interface FinallyKeywordToken {
  readonly kind: 'FinallyKeyword';
}
// NodeType
export interface ForKeywordToken {
  readonly kind: 'ForKeyword';
}
// NodeType
export interface FromKeywordToken {
  readonly kind: 'FromKeyword';
}
// NodeType
export interface FunctionKeywordToken {
  readonly kind: 'FunctionKeyword';
}
// NodeType
export interface GetKeywordToken {
  readonly kind: 'GetKeyword';
}
// NodeType
export interface GlobalKeywordToken {
  readonly kind: 'GlobalKeyword';
}
// NodeType
export interface IfKeywordToken {
  readonly kind: 'IfKeyword';
}
// NodeType
export interface ImplementsKeywordToken {
  readonly kind: 'ImplementsKeyword';
}
// NodeType
export interface ImportKeywordToken {
  readonly kind: 'ImportKeyword';
}
// NodeType
export interface InferKeywordToken {
  readonly kind: 'InferKeyword';
}
// NodeType
export interface InterfaceKeywordToken {
  readonly kind: 'InterfaceKeyword';
}
// NodeType
export interface IntrinsicKeywordToken {
  readonly kind: 'IntrinsicKeyword';
}
// NodeType
export interface IsKeywordToken {
  readonly kind: 'IsKeyword';
}
// NodeType
export interface KeyOfKeywordToken {
  readonly kind: 'KeyOfKeyword';
}
// NodeType
export interface LetKeywordToken {
  readonly kind: 'LetKeyword';
}
// NodeType
export interface ModuleKeywordToken {
  readonly kind: 'ModuleKeyword';
}
// NodeType
export interface NamespaceKeywordToken {
  readonly kind: 'NamespaceKeyword';
}
// NodeType
export interface NeverKeywordToken {
  readonly kind: 'NeverKeyword';
}
// NodeType
export interface NewKeywordToken {
  readonly kind: 'NewKeyword';
}
// NodeType
export interface NullKeywordToken {
  readonly kind: 'NullKeyword';
}
// NodeType
export interface NumberKeywordToken {
  readonly kind: 'NumberKeyword';
}
// NodeType
export interface ObjectKeywordToken {
  readonly kind: 'ObjectKeyword';
}
// NodeType
export interface OfKeywordToken {
  readonly kind: 'OfKeyword';
}
// NodeType
export interface PackageKeywordToken {
  readonly kind: 'PackageKeyword';
}
// NodeType
export interface RequireKeywordToken {
  readonly kind: 'RequireKeyword';
}
// NodeType
export interface ReturnKeywordToken {
  readonly kind: 'ReturnKeyword';
}
// NodeType
export interface SatisfiesKeywordToken {
  readonly kind: 'SatisfiesKeyword';
}
// NodeType
export interface SetKeywordToken {
  readonly kind: 'SetKeyword';
}
// NodeType
export interface StringKeywordToken {
  readonly kind: 'StringKeyword';
}
// NodeType
export interface SuperKeywordToken {
  readonly kind: 'SuperKeyword';
}
// NodeType
export interface SwitchKeywordToken {
  readonly kind: 'SwitchKeyword';
}
// NodeType
export interface SymbolKeywordToken {
  readonly kind: 'SymbolKeyword';
}
// NodeType
export interface ThisKeywordToken {
  readonly kind: 'ThisKeyword';
}
// NodeType
export interface ThrowKeywordToken {
  readonly kind: 'ThrowKeyword';
}
// NodeType
export interface TrueKeywordToken {
  readonly kind: 'TrueKeyword';
}
// NodeType
export interface TryKeywordToken {
  readonly kind: 'TryKeyword';
}
// NodeType
export interface TypeKeywordToken {
  readonly kind: 'TypeKeyword';
}
// NodeType
export interface TypeOfKeywordToken {
  readonly kind: 'TypeOfKeyword';
}
// NodeType
export interface UndefinedKeywordToken {
  readonly kind: 'UndefinedKeyword';
}
// NodeType
export interface UniqueKeywordToken {
  readonly kind: 'UniqueKeyword';
}
// NodeType
export interface UnknownKeywordToken {
  readonly kind: 'UnknownKeyword';
}
// NodeType
export interface VarKeywordToken {
  readonly kind: 'VarKeyword';
}
// NodeType
export interface VoidKeywordToken {
  readonly kind: 'VoidKeyword';
}
// NodeType
export interface WhileKeywordToken {
  readonly kind: 'WhileKeyword';
}
// NodeType
export interface WithKeywordToken {
  readonly kind: 'WithKeyword';
}
// NodeType
export interface YieldKeywordToken {
  readonly kind: 'YieldKeyword';
}
