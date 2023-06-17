export type NodeArray<T> = readonly T[];
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
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface BinaryExpression {
  readonly kind: 'BinaryExpression';
  readonly left: Expression;
  readonly operatorToken: BinaryOperatorToken;
  readonly right: Expression;
}
export interface Block {
  readonly kind: 'Block';
  readonly statements: NodeArray<Statement>;
}
export interface BreakStatement {
  readonly kind: 'BreakStatement';
  readonly label?: Identifier;
}
export interface CallSignatureDeclaration {
  readonly kind: 'CallSignature';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface CaseClause {
  readonly kind: 'CaseClause';
  readonly expression: Expression;
  readonly statements: NodeArray<Statement>;
}
export type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
export interface ClassStaticBlockDeclaration {
  readonly kind: 'ClassStaticBlockDeclaration';
  readonly body: Block;
  readonly name?: PropertyName;
}
export interface ConstructorDeclaration {
  readonly kind: 'Constructor';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface ConstructorTypeNode {
  readonly kind: 'ConstructorType';
  readonly modifiers?: NodeArray<Modifier>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface ConstructSignatureDeclaration {
  readonly kind: 'ConstructSignature';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface ContinueStatement {
  readonly kind: 'ContinueStatement';
  readonly label?: Identifier;
}
export interface DebuggerStatement {
  readonly kind: 'DebuggerStatement';
}
export interface DoStatement {
  readonly kind: 'DoStatement';
  readonly expression: Expression;
  readonly statement: Statement;
}
export interface ElementAccessExpression {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
}
export interface EmptyStatement {
  readonly kind: 'EmptyStatement';
}
export interface EndOfFileToken {
  readonly kind: 'EndOfFileToken';
}
export interface EnumDeclaration {
  readonly kind: 'EnumDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly members: NodeArray<EnumMember>;
}
export interface EnumMember {
  readonly kind: 'EnumMember';
  readonly name: PropertyName;
  readonly initializer?: Expression;
}
export interface ExportAssignment {
  readonly kind: 'ExportAssignment';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly expression: Expression;
  readonly name?: DeclarationName;
}
export interface ExportDeclaration {
  readonly kind: 'ExportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly exportClause?: NamedExportBindings;
  readonly moduleSpecifier?: Expression;
  readonly assertClause?: AssertClause;
  readonly name?: DeclarationName;
}
export interface ExportSpecifier {
  readonly kind: 'ExportSpecifier';
  readonly propertyName?: Identifier;
  readonly name: Identifier;
}
export interface ExpressionStatement {
  readonly kind: 'ExpressionStatement';
  readonly expression: Expression;
}
export interface ForInStatement {
  readonly kind: 'ForInStatement';
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
}
export interface ForOfStatement {
  readonly kind: 'ForOfStatement';
  readonly awaitModifier?: AwaitKeyword;
  readonly initializer: ForInitializer;
  readonly expression: Expression;
  readonly statement: Statement;
}
export interface ForStatement {
  readonly kind: 'ForStatement';
  readonly initializer?: ForInitializer;
  readonly condition?: Expression;
  readonly incrementor?: Expression;
  readonly statement: Statement;
}
export interface FunctionDeclaration {
  readonly kind: 'FunctionDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly body?: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface FunctionExpression {
  readonly kind: 'FunctionExpression';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name?: Identifier;
  readonly body: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface FunctionTypeNode {
  readonly kind: 'FunctionType';
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface Identifier {
  readonly kind: 'Identifier';
  readonly originalKeywordKind?: SyntaxKind;
}
export interface IfStatement {
  readonly kind: 'IfStatement';
  readonly expression: Expression;
  readonly thenStatement: Statement;
  readonly elseStatement?: Statement;
}
export interface ImportDeclaration {
  readonly kind: 'ImportDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly importClause?: ImportClause;
  readonly moduleSpecifier: Expression;
  readonly assertClause?: AssertClause;
}
export interface ImportEqualsDeclaration {
  readonly kind: 'ImportEqualsDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly moduleReference: ModuleReference;
}
export interface IndexSignatureDeclaration {
  readonly kind: 'IndexSignature';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly type: TypeNode;
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface InterfaceDeclaration {
  readonly kind: 'InterfaceDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<TypeElement>;
}
export interface JSDocFunctionType {
  readonly kind: 'JSDocFunctionType';
  readonly name?: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface JSDocSignature {
  readonly kind: 'JSDocSignature';
}
export interface LabeledStatement {
  readonly kind: 'LabeledStatement';
  readonly label: Identifier;
  readonly statement: Statement;
}
export interface MethodDeclaration {
  readonly kind: 'MethodDeclaration';
  readonly name: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface MethodSignature {
  readonly kind: 'MethodSignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface ModuleDeclaration {
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: ModuleName;
}
export interface NamedTupleMember {
  readonly kind: 'NamedTupleMember';
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: Identifier;
  readonly questionToken?: QuestionToken;
  readonly type: TypeNode;
}
export interface NamespaceExportDeclaration {
  readonly kind: 'NamespaceExportDeclaration';
  readonly name: Identifier;
}
export interface ObjectLiteralExpression {
  readonly kind: 'ObjectLiteralExpression';
  readonly properties: NodeArray<ObjectLiteralElementLike>;
}
export interface ParameterDeclaration {
  readonly kind: 'Parameter';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
export interface ParenthesizedExpression {
  readonly kind: 'ParenthesizedExpression';
  readonly expression: Expression;
}
export interface PropertyAccessExpression {
  readonly kind: 'PropertyAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
}
export interface PropertyAssignment {
  readonly kind: 'PropertyAssignment';
  readonly name: PropertyName;
  readonly initializer: Expression;
}
export interface PropertyDeclaration {
  readonly kind: 'PropertyDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
export interface PropertySignature {
  readonly kind: 'PropertySignature';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: PropertyName;
  readonly questionToken?: QuestionToken;
  readonly type?: TypeNode;
}
export interface ReturnStatement {
  readonly kind: 'ReturnStatement';
  readonly expression?: Expression;
}
export interface ShorthandPropertyAssignment {
  readonly kind: 'ShorthandPropertyAssignment';
  readonly name: Identifier;
  readonly equalsToken?: EqualsToken;
  readonly objectAssignmentInitializer?: Expression;
}
export interface SpreadAssignment {
  readonly kind: 'SpreadAssignment';
  readonly expression: Expression;
  readonly name?: PropertyName;
}
export interface SwitchStatement {
  readonly kind: 'SwitchStatement';
  readonly expression: Expression;
  readonly caseBlock: CaseBlock;
}
export interface ThrowStatement {
  readonly kind: 'ThrowStatement';
  readonly expression: Expression;
}
export interface TryStatement {
  readonly kind: 'TryStatement';
  readonly tryBlock: Block;
  readonly catchClause?: CatchClause;
  readonly finallyBlock?: Block;
}
export interface TypeAliasDeclaration {
  readonly kind: 'TypeAliasDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly type: TypeNode;
}
export interface TypeParameterDeclaration {
  readonly kind: 'TypeParameter';
  readonly modifiers?: NodeArray<Modifier>;
  readonly name: Identifier;
  readonly constraint?: TypeNode;
  readonly default?: TypeNode;
  expression?: Expression;
}
export interface VariableDeclaration {
  readonly kind: 'VariableDeclaration';
  readonly name: BindingName;
  readonly exclamationToken?: ExclamationToken;
  readonly type?: TypeNode;
  readonly initializer?: Expression;
}
export interface VariableStatement {
  readonly kind: 'VariableStatement';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly declarationList: VariableDeclarationList;
}
export interface WhileStatement {
  readonly kind: 'WhileStatement';
  readonly expression: Expression;
  readonly statement: Statement;
}
export interface WithStatement {
  readonly kind: 'WithStatement';
  readonly expression: Expression;
  readonly statement: Statement;
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
  readonly type?: TypeNode;
}
export interface ParenthesizedTypeNode {
  readonly kind: 'ParenthesizedType';
  readonly type: TypeNode;
}
export interface TypeOperatorNode {
  readonly kind: 'TypeOperator';
  readonly type: TypeNode;
}
export interface MappedTypeNode {
  readonly kind: 'MappedType';
  readonly typeParameter: TypeParameterDeclaration;
  readonly nameType?: TypeNode;
  readonly type?: TypeNode;
  readonly members?: NodeArray<TypeElement>;
}
export type AssertionExpression = TypeAssertion | AsExpression;
export interface JSDocTypeExpression {
  readonly kind: 'JSDocTypeExpression';
  readonly type: TypeNode;
}
export interface JSDocNonNullableType {
  readonly kind: 'JSDocNonNullableType';
  readonly type: TypeNode;
}
export interface JSDocNullableType {
  readonly kind: 'JSDocNullableType';
  readonly type: TypeNode;
}
export interface JSDocOptionalType {
  readonly kind: 'JSDocOptionalType';
  readonly type: TypeNode;
}
export interface JSDocVariadicType {
  readonly kind: 'JSDocVariadicType';
  readonly type: TypeNode;
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
}
export interface NewExpression {
  readonly kind: 'NewExpression';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments?: NodeArray<Expression>;
}
export interface TaggedTemplateExpression {
  readonly kind: 'TaggedTemplateExpression';
  readonly tag: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly template: TemplateLiteral;
}
export interface JsxOpeningElement {
  readonly kind: 'JsxOpeningElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
}
export interface JsxSelfClosingElement {
  readonly kind: 'JsxSelfClosingElement';
  readonly tagName: JsxTagNameExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly attributes: JsxAttributes;
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
}
export interface BindingElement {
  readonly kind: 'BindingElement';
  readonly propertyName?: PropertyName;
  readonly dotDotDotToken?: DotDotDotToken;
  readonly name: BindingName;
  readonly initializer?: Expression;
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
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface SetAccessorDeclaration {
  readonly kind: 'SetAccessor';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name: PropertyName;
  readonly body?: FunctionBody;
  readonly parameters: NodeArray<ParameterDeclaration>;
}
export interface ClassExpression {
  readonly kind: 'ClassExpression';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
}
export interface ClassDeclaration {
  readonly kind: 'ClassDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
  readonly name?: Identifier;
  readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
  readonly heritageClauses?: NodeArray<HeritageClause>;
  readonly members: NodeArray<ClassElement>;
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
}
export interface DotDotDotToken {
  readonly kind: 'DotDotDotToken';
}
export interface QuestionToken {
  readonly kind: 'QuestionToken';
}
export interface ExclamationToken {
  readonly kind: 'ExclamationToken';
}
export interface ColonToken {
  readonly kind: 'ColonToken';
}
export interface EqualsToken {
  readonly kind: 'EqualsToken';
}
export interface AmpersandAmpersandEqualsToken {
  readonly kind: 'AmpersandAmpersandEqualsToken';
}
export interface BarBarEqualsToken {
  readonly kind: 'BarBarEqualsToken';
}
export interface QuestionQuestionEqualsToken {
  readonly kind: 'QuestionQuestionEqualsToken';
}
export interface AsteriskToken {
  readonly kind: 'AsteriskToken';
}
export interface EqualsGreaterThanToken {
  readonly kind: 'EqualsGreaterThanToken';
}
export interface PlusToken {
  readonly kind: 'PlusToken';
}
export interface MinusToken {
  readonly kind: 'MinusToken';
}
export interface QuestionDotToken {
  readonly kind: 'QuestionDotToken';
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
}
export interface AssertKeyword {
  readonly kind: 'AssertKeyword';
}
export interface AwaitKeyword {
  readonly kind: 'AwaitKeyword';
}
export interface CaseKeyword {
  readonly kind: 'CaseKeyword';
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
}
export interface AccessorKeyword {
  readonly kind: 'AccessorKeyword';
}
export interface AsyncKeyword {
  readonly kind: 'AsyncKeyword';
}
export interface ConstKeyword {
  readonly kind: 'ConstKeyword';
}
export interface DeclareKeyword {
  readonly kind: 'DeclareKeyword';
}
export interface DefaultKeyword {
  readonly kind: 'DefaultKeyword';
}
export interface ExportKeyword {
  readonly kind: 'ExportKeyword';
}
export interface InKeyword {
  readonly kind: 'InKeyword';
}
export interface PrivateKeyword {
  readonly kind: 'PrivateKeyword';
}
export interface ProtectedKeyword {
  readonly kind: 'ProtectedKeyword';
}
export interface PublicKeyword {
  readonly kind: 'PublicKeyword';
}
export interface ReadonlyKeyword {
  readonly kind: 'ReadonlyKeyword';
}
export interface OutKeyword {
  readonly kind: 'OutKeyword';
}
export interface OverrideKeyword {
  readonly kind: 'OverrideKeyword';
}
export interface StaticKeyword {
  readonly kind: 'StaticKeyword';
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
}
export interface NumericLiteral {
  readonly kind: 'NumericLiteral';
}
export interface ComputedPropertyName {
  readonly kind: 'ComputedPropertyName';
  readonly expression: Expression;
}
export interface PrivateIdentifier {
  readonly kind: 'PrivateIdentifier';
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
  readonly tagName: Identifier;
}
export interface JSDocParameterTag {
  readonly kind: 'JSDocParameterTag';
  readonly name: EntityName;
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export interface ObjectBindingPattern {
  readonly kind: 'ObjectBindingPattern';
  readonly elements: NodeArray<BindingElement>;
}
export interface ArrayBindingPattern {
  readonly kind: 'ArrayBindingPattern';
  readonly elements: NodeArray<ArrayBindingElement>;
}
export type ArrayBindingElement = BindingElement | OmittedExpression;
export interface OmittedExpression {
  readonly kind: 'OmittedExpression';
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
}
export interface SemicolonClassElement {
  readonly kind: 'SemicolonClassElement';
  readonly name?: PropertyName;
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
}
export interface AssertClause {
  readonly kind: 'AssertClause';
  readonly elements: NodeArray<AssertEntry>;
}
export interface ImportTypeNode {
  readonly kind: 'ImportType';
  readonly argument: TypeNode;
  readonly assertions?: ImportTypeAssertionContainer;
  readonly qualifier?: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
}
export type NodeWithTypeArguments =
  | ImportTypeNode
  | TypeReferenceNode
  | TypeQueryNode
  | ExpressionWithTypeArguments;
export interface ThisTypeNode {
  readonly kind: 'ThisType';
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
}
export interface ExpressionWithTypeArguments {
  readonly kind: 'ExpressionWithTypeArguments';
  readonly expression: LeftHandSideExpression;
  readonly typeArguments?: NodeArray<TypeNode>;
}
export interface TypeQueryNode {
  readonly kind: 'TypeQuery';
  readonly exprName: EntityName;
  readonly typeArguments?: NodeArray<TypeNode>;
}
export interface TypeLiteralNode {
  readonly kind: 'TypeLiteral';
  readonly members: NodeArray<TypeElement>;
}
export interface ArrayTypeNode {
  readonly kind: 'ArrayType';
  readonly elementType: TypeNode;
}
export interface TupleTypeNode {
  readonly kind: 'TupleType';
  readonly elements: NodeArray<TypeNode | NamedTupleMember>;
}
export interface OptionalTypeNode {
  readonly kind: 'OptionalType';
  readonly type: TypeNode;
}
export interface RestTypeNode {
  readonly kind: 'RestType';
  readonly type: TypeNode;
}
export type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
export interface UnionTypeNode {
  readonly kind: 'UnionType';
  readonly types: NodeArray<TypeNode>;
}
export interface IntersectionTypeNode {
  readonly kind: 'IntersectionType';
  readonly types: NodeArray<TypeNode>;
}
export interface ConditionalTypeNode {
  readonly kind: 'ConditionalType';
  readonly checkType: TypeNode;
  readonly extendsType: TypeNode;
  readonly trueType: TypeNode;
  readonly falseType: TypeNode;
}
export interface InferTypeNode {
  readonly kind: 'InferType';
  readonly typeParameter: TypeParameterDeclaration;
}
export interface IndexedAccessTypeNode {
  readonly kind: 'IndexedAccessType';
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
}
export interface LiteralTypeNode {
  readonly kind: 'LiteralType';
}
export type LiteralExpression =
  | StringLiteral
  | RegularExpressionLiteral
  | NoSubstitutionTemplateLiteral
  | NumericLiteral
  | BigIntLiteral;
export interface NoSubstitutionTemplateLiteral {
  readonly kind: 'NoSubstitutionTemplateLiteral';
}
export type PropertyNameLiteral =
  | Identifier
  | StringLiteralLike
  | NumericLiteral;
export interface TemplateLiteralTypeNode {
  kind: 'TemplateLiteralType';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
}
export interface TemplateHead {
  readonly kind: 'TemplateHead';
}
export interface TemplateLiteralTypeSpan {
  readonly kind: 'TemplateLiteralTypeSpan';
  readonly type: TypeNode;
}
export interface PartiallyEmittedExpression {
  readonly kind: 'PartiallyEmittedExpression';
  readonly expression: Expression;
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
export interface PrefixUnaryExpression {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: PrefixUnaryOperator;
  readonly operand: UnaryExpression;
}
export type PostfixUnaryOperator = 'PlusPlusToken' | 'MinusMinusToken';
export interface PostfixUnaryExpression {
  readonly kind: 'PostfixUnaryExpression';
  readonly operand: LeftHandSideExpression;
  readonly operator: PostfixUnaryOperator;
}
export type MemberExpression =
  | PrimaryExpression
  | PropertyAccessExpression
  | ElementAccessExpression
  | ExpressionWithTypeArguments
  | TaggedTemplateExpression;
export interface NullLiteral {
  readonly kind: 'NullKeyword';
}
export interface TrueLiteral {
  readonly kind: 'TrueKeyword';
}
export interface FalseLiteral {
  readonly kind: 'FalseKeyword';
}
export type BooleanLiteral = TrueLiteral | FalseLiteral;
export interface ThisExpression {
  readonly kind: 'ThisKeyword';
}
export interface SuperExpression {
  readonly kind: 'SuperKeyword';
}
export interface ImportExpression {
  readonly kind: 'ImportKeyword';
}
export interface DeleteExpression {
  readonly kind: 'DeleteExpression';
  readonly expression: UnaryExpression;
}
export interface TypeOfExpression {
  readonly kind: 'TypeOfExpression';
  readonly expression: UnaryExpression;
}
export interface VoidExpression {
  readonly kind: 'VoidExpression';
  readonly expression: UnaryExpression;
}
export interface AwaitExpression {
  readonly kind: 'AwaitExpression';
  readonly expression: UnaryExpression;
}
export interface YieldExpression {
  readonly kind: 'YieldExpression';
  readonly asteriskToken?: AsteriskToken;
  readonly expression?: Expression;
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
}
export interface ObjectDestructuringAssignment {
  readonly left: ObjectLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
}
export interface ArrayDestructuringAssignment {
  readonly left: ArrayLiteralExpression;
  readonly operatorToken: EqualsToken;
  readonly kind: 'BinaryExpression';
  readonly right: Expression;
}
export interface ArrayLiteralExpression {
  readonly kind: 'ArrayLiteralExpression';
  readonly elements: NodeArray<Expression>;
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
}
export interface BigIntLiteral {
  readonly kind: 'BigIntLiteral';
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
}
export interface TemplateMiddle {
  readonly kind: 'TemplateMiddle';
}
export interface TemplateTail {
  readonly kind: 'TemplateTail';
}
export type PseudoLiteralToken = TemplateHead | TemplateMiddle | TemplateTail;
export type TemplateLiteralToken =
  | NoSubstitutionTemplateLiteral
  | PseudoLiteralToken;
export interface TemplateExpression {
  readonly kind: 'TemplateExpression';
  readonly head: TemplateHead;
  readonly templateSpans: NodeArray<TemplateSpan>;
}
export interface TemplateSpan {
  readonly kind: 'TemplateSpan';
  readonly expression: Expression;
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
}
export interface SuperPropertyAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'PropertyAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly name: MemberName;
}
export interface ElementAccessChain {
  readonly kind: 'ElementAccessExpression';
  readonly expression: LeftHandSideExpression;
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
}
export interface SuperElementAccessExpression {
  readonly expression: SuperExpression;
  readonly kind: 'ElementAccessExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly argumentExpression: Expression;
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
}
export type OptionalChain =
  | PropertyAccessChain
  | ElementAccessChain
  | CallChain
  | NonNullChain;
export interface NonNullChain {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
}
export interface SuperCall {
  readonly expression: SuperExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
}
export interface ImportCall {
  readonly expression: ImportExpression;
  readonly kind: 'CallExpression';
  readonly questionDotToken?: QuestionDotToken;
  readonly typeArguments?: NodeArray<TypeNode>;
  readonly arguments: NodeArray<Expression>;
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
}
export interface TypeAssertion {
  readonly kind: 'TypeAssertionExpression';
  readonly type: TypeNode;
  readonly expression: UnaryExpression;
}
export interface SatisfiesExpression {
  readonly kind: 'SatisfiesExpression';
  readonly expression: Expression;
  readonly type: TypeNode;
}
export interface NonNullExpression {
  readonly kind: 'NonNullExpression';
  readonly expression: Expression;
}
export interface MetaProperty {
  readonly kind: 'MetaProperty';
  readonly name: Identifier;
}
export interface JsxElement {
  readonly kind: 'JsxElement';
  readonly openingElement: JsxOpeningElement;
  readonly children: NodeArray<JsxChild>;
  readonly closingElement: JsxClosingElement;
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
}
export type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
export interface JsxSpreadAttribute {
  readonly kind: 'JsxSpreadAttribute';
  readonly expression: Expression;
  readonly name?: PropertyName;
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
}
export interface JsxAttributes {
  readonly kind: 'JsxAttributes';
  readonly properties: NodeArray<JsxAttributeLike>;
}
export interface JsxFragment {
  readonly kind: 'JsxFragment';
  readonly openingFragment: JsxOpeningFragment;
  readonly children: NodeArray<JsxChild>;
  readonly closingFragment: JsxClosingFragment;
}
export interface JsxOpeningFragment {
  readonly kind: 'JsxOpeningFragment';
}
export interface JsxClosingFragment {
  readonly kind: 'JsxClosingFragment';
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
}
export interface NotEmittedStatement {
  readonly kind: 'NotEmittedStatement';
}
export interface CommaListExpression {
  readonly kind: 'CommaListExpression';
  readonly elements: NodeArray<Expression>;
}
export interface MissingDeclaration {
  readonly kind: 'MissingDeclaration';
  readonly name?: Identifier;
}
export type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
export interface SourceFile {
  readonly kind: 'SourceFile';
  readonly statements: NodeArray<Statement>;
  readonly endOfFileToken: EndOfFileToken;
}
export interface ModuleBlock {
  readonly kind: 'ModuleBlock';
  readonly statements: NodeArray<Statement>;
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
}
export interface DefaultClause {
  readonly kind: 'DefaultClause';
  readonly statements: NodeArray<Statement>;
}
export interface CatchClause {
  readonly kind: 'CatchClause';
  readonly variableDeclaration?: VariableDeclaration;
  readonly block: Block;
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
  readonly name?: Identifier;
  readonly tagName: Identifier;
}
export interface JSDocCallbackTag {
  readonly kind: 'JSDocCallbackTag';
  readonly name?: Identifier;
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
}
export interface JSDocTemplateTag {
  readonly kind: 'JSDocTemplateTag';
  readonly typeParameters: NodeArray<TypeParameterDeclaration>;
  readonly tagName: Identifier;
}
export type ClassLikeDeclarationBase = ClassDeclaration | ClassExpression;
export interface HeritageClause {
  readonly kind: 'HeritageClause';
  readonly types: NodeArray<ExpressionWithTypeArguments>;
}
export type ModuleName = Identifier | StringLiteral;
export type ModuleBody = NamespaceBody | JSDocNamespaceBody;
export type NamespaceBody = ModuleBlock | NamespaceDeclaration;
export type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
export interface NamespaceDeclaration {
  readonly name: Identifier;
  readonly body: NamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
}
export interface JSDocNamespaceDeclaration {
  readonly name: Identifier;
  readonly body?: JSDocNamespaceBody;
  readonly kind: 'ModuleDeclaration';
  readonly modifiers?: NodeArray<ModifierLike>;
}
export type ModuleReference = EntityName | ExternalModuleReference;
export interface ExternalModuleReference {
  readonly kind: 'ExternalModuleReference';
  readonly expression: Expression;
}
export interface ImportClause {
  readonly kind: 'ImportClause';
  readonly name?: Identifier;
  readonly namedBindings?: NamedImportBindings;
}
export type NamedImportBindings = NamespaceImport | NamedImports;
export interface NamespaceImport {
  readonly kind: 'NamespaceImport';
  readonly name: Identifier;
}
export interface NamedImports {
  readonly kind: 'NamedImports';
  readonly elements: NodeArray<ImportSpecifier>;
}
export type NamedExportBindings = NamespaceExport | NamedExports;
export interface NamespaceExport {
  readonly kind: 'NamespaceExport';
  readonly name: Identifier;
}
export interface NamedExports {
  readonly kind: 'NamedExports';
  readonly elements: NodeArray<ExportSpecifier>;
}
export type AssertionKey = Identifier | StringLiteral;
export interface AssertEntry {
  readonly kind: 'AssertEntry';
  readonly name: AssertionKey;
  readonly value: Expression;
}
export interface ImportSpecifier {
  readonly kind: 'ImportSpecifier';
  readonly propertyName?: Identifier;
  readonly name: Identifier;
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
}
export interface JSDocMemberName {
  readonly kind: 'JSDocMemberName';
  readonly right: Identifier;
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
}
export interface JSDocUnknownType {
  readonly kind: 'JSDocUnknownType';
}
export interface JSDocNamepathType {
  readonly kind: 'JSDocNamepathType';
  readonly type: TypeNode;
}
export type JSDocTypeReferencingNode =
  | JSDocVariadicType
  | JSDocOptionalType
  | JSDocNullableType
  | JSDocNonNullableType;
export interface JSDoc {
  readonly kind: 'JSDoc';
  readonly tags?: NodeArray<JSDocTag>;
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
export interface JSDocLink {
  readonly kind: 'JSDocLink';
}
export interface JSDocLinkCode {
  readonly kind: 'JSDocLinkCode';
}
export interface JSDocLinkPlain {
  readonly kind: 'JSDocLinkPlain';
}
export type JSDocComment =
  | JSDocText
  | JSDocLink
  | JSDocLinkCode
  | JSDocLinkPlain;
export interface JSDocText {
  readonly kind: 'JSDocText';
}
export interface JSDocUnknownTag {
  readonly kind: 'JSDocTag';
  readonly tagName: Identifier;
}
export interface JSDocAugmentsTag {
  readonly kind: 'JSDocAugmentsTag';
  readonly tagName: Identifier;
}
export interface JSDocImplementsTag {
  readonly kind: 'JSDocImplementsTag';
  readonly tagName: Identifier;
}
export interface JSDocAuthorTag {
  readonly kind: 'JSDocAuthorTag';
  readonly tagName: Identifier;
}
export interface JSDocDeprecatedTag {
  kind: 'JSDocDeprecatedTag';
  readonly tagName: Identifier;
}
export interface JSDocClassTag {
  readonly kind: 'JSDocClassTag';
  readonly tagName: Identifier;
}
export interface JSDocPublicTag {
  readonly kind: 'JSDocPublicTag';
  readonly tagName: Identifier;
}
export interface JSDocPrivateTag {
  readonly kind: 'JSDocPrivateTag';
  readonly tagName: Identifier;
}
export interface JSDocProtectedTag {
  readonly kind: 'JSDocProtectedTag';
  readonly tagName: Identifier;
}
export interface JSDocReadonlyTag {
  readonly kind: 'JSDocReadonlyTag';
  readonly tagName: Identifier;
}
export interface JSDocOverrideTag {
  readonly kind: 'JSDocOverrideTag';
  readonly tagName: Identifier;
}
export interface JSDocEnumTag {
  readonly kind: 'JSDocEnumTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export interface JSDocThisTag {
  readonly kind: 'JSDocThisTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export interface JSDocSeeTag {
  readonly kind: 'JSDocSeeTag';
  readonly name?: JSDocNameReference;
  readonly tagName: Identifier;
}
export interface JSDocReturnTag {
  readonly kind: 'JSDocReturnTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export interface JSDocTypeTag {
  readonly kind: 'JSDocTypeTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export interface JSDocOverloadTag {
  readonly kind: 'JSDocOverloadTag';
  readonly typeExpression: JSDocSignature;
  readonly tagName: Identifier;
}
export interface JSDocThrowsTag {
  readonly kind: 'JSDocThrowsTag';
  readonly typeExpression?: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export type JSDocPropertyLikeTag = JSDocPropertyTag | JSDocParameterTag;
export interface JSDocTypeLiteral {
  readonly kind: 'JSDocTypeLiteral';
}
export interface JSDocSatisfiesTag {
  readonly kind: 'JSDocSatisfiesTag';
  readonly typeExpression: JSDocTypeExpression;
  readonly tagName: Identifier;
}
export interface JsonSourceFile {
  readonly statements: NodeArray<JsonObjectExpressionStatement>;
  readonly kind: 'SourceFile';
  readonly endOfFileToken: EndOfFileToken;
}
export interface JsonObjectExpressionStatement {
  readonly expression: JsonObjectExpression;
  readonly kind: 'ExpressionStatement';
}
export interface TsConfigSourceFile {
  readonly statements: NodeArray<JsonObjectExpressionStatement>;
  readonly kind: 'SourceFile';
  readonly endOfFileToken: EndOfFileToken;
}
export interface JsonMinusNumericLiteral {
  readonly kind: 'PrefixUnaryExpression';
  readonly operator: 'MinusToken';
  readonly operand: NumericLiteral;
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
}
export interface AsteriskAsteriskToken {
  readonly kind: 'AsteriskAsteriskToken';
}
export type ExponentiationOperatorToken = AsteriskAsteriskToken;
export interface SlashToken {
  readonly kind: 'SlashToken';
}
export interface PercentToken {
  readonly kind: 'PercentToken';
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
}
export interface GreaterThanGreaterThanToken {
  readonly kind: 'GreaterThanGreaterThanToken';
}
export interface GreaterThanGreaterThanGreaterThanToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanToken';
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
}
export interface LessThanEqualsToken {
  readonly kind: 'LessThanEqualsToken';
}
export interface GreaterThanToken {
  readonly kind: 'GreaterThanToken';
}
export interface GreaterThanEqualsToken {
  readonly kind: 'GreaterThanEqualsToken';
}
export interface InstanceOfKeywordToken {
  readonly kind: 'InstanceOfKeyword';
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
}
export interface EqualsEqualsEqualsToken {
  readonly kind: 'EqualsEqualsEqualsToken';
}
export interface ExclamationEqualsEqualsToken {
  readonly kind: 'ExclamationEqualsEqualsToken';
}
export interface ExclamationEqualsToken {
  readonly kind: 'ExclamationEqualsToken';
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
}
export interface BarToken {
  readonly kind: 'BarToken';
}
export interface CaretToken {
  readonly kind: 'CaretToken';
}
export type BitwiseOperatorToken = AmpersandToken | BarToken | CaretToken;
export type BitwiseOperatorOrHigherToken =
  | EqualityOperatorOrHigherToken
  | BitwiseOperatorToken;
export interface AmpersandAmpersandToken {
  readonly kind: 'AmpersandAmpersandToken';
}
export interface BarBarToken {
  readonly kind: 'BarBarToken';
}
export type LogicalOperatorToken = AmpersandAmpersandToken | BarBarToken;
export type LogicalOperatorOrHigherToken =
  | BitwiseOperatorOrHigherToken
  | LogicalOperatorToken;
export interface PlusEqualsToken {
  readonly kind: 'PlusEqualsToken';
}
export interface MinusEqualsToken {
  readonly kind: 'MinusEqualsToken';
}
export interface AsteriskAsteriskEqualsToken {
  readonly kind: 'AsteriskAsteriskEqualsToken';
}
export interface AsteriskEqualsToken {
  readonly kind: 'AsteriskEqualsToken';
}
export interface SlashEqualsToken {
  readonly kind: 'SlashEqualsToken';
}
export interface PercentEqualsToken {
  readonly kind: 'PercentEqualsToken';
}
export interface AmpersandEqualsToken {
  readonly kind: 'AmpersandEqualsToken';
}
export interface BarEqualsToken {
  readonly kind: 'BarEqualsToken';
}
export interface CaretEqualsToken {
  readonly kind: 'CaretEqualsToken';
}
export interface LessThanLessThanEqualsToken {
  readonly kind: 'LessThanLessThanEqualsToken';
}
export interface GreaterThanGreaterThanGreaterThanEqualsToken {
  readonly kind: 'GreaterThanGreaterThanGreaterThanEqualsToken';
}
export interface GreaterThanGreaterThanEqualsToken {
  readonly kind: 'GreaterThanGreaterThanEqualsToken';
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
}
export interface CloseBraceToken {
  readonly kind: 'CloseBraceToken';
}
export interface OpenParenToken {
  readonly kind: 'OpenParenToken';
}
export interface CloseParenToken {
  readonly kind: 'CloseParenToken';
}
export interface OpenBracketToken {
  readonly kind: 'OpenBracketToken';
}
export interface CloseBracketToken {
  readonly kind: 'CloseBracketToken';
}
export interface SemicolonToken {
  readonly kind: 'SemicolonToken';
}
export interface LessThanSlashToken {
  readonly kind: 'LessThanSlashToken';
}
export interface PlusPlusToken {
  readonly kind: 'PlusPlusToken';
}
export interface MinusMinusToken {
  readonly kind: 'MinusMinusToken';
}
export interface TildeToken {
  readonly kind: 'TildeToken';
}
export interface AtToken {
  readonly kind: 'AtToken';
}
export interface BacktickToken {
  readonly kind: 'BacktickToken';
}
export interface HashToken {
  readonly kind: 'HashToken';
}
export interface AnyKeywordToken {
  readonly kind: 'AnyKeyword';
}
export interface AsKeywordToken {
  readonly kind: 'AsKeyword';
}
export interface BigIntKeywordToken {
  readonly kind: 'BigIntKeyword';
}
export interface BooleanKeywordToken {
  readonly kind: 'BooleanKeyword';
}
export interface BreakKeywordToken {
  readonly kind: 'BreakKeyword';
}
export interface CatchKeywordToken {
  readonly kind: 'CatchKeyword';
}
export interface ClassKeywordToken {
  readonly kind: 'ClassKeyword';
}
export interface ConstructorKeywordToken {
  readonly kind: 'ConstructorKeyword';
}
export interface ContinueKeywordToken {
  readonly kind: 'ContinueKeyword';
}
export interface DebuggerKeywordToken {
  readonly kind: 'DebuggerKeyword';
}
export interface DeleteKeywordToken {
  readonly kind: 'DeleteKeyword';
}
export interface DoKeywordToken {
  readonly kind: 'DoKeyword';
}
export interface ElseKeywordToken {
  readonly kind: 'ElseKeyword';
}
export interface EnumKeywordToken {
  readonly kind: 'EnumKeyword';
}
export interface ExtendsKeywordToken {
  readonly kind: 'ExtendsKeyword';
}
export interface FalseKeywordToken {
  readonly kind: 'FalseKeyword';
}
export interface FinallyKeywordToken {
  readonly kind: 'FinallyKeyword';
}
export interface ForKeywordToken {
  readonly kind: 'ForKeyword';
}
export interface FromKeywordToken {
  readonly kind: 'FromKeyword';
}
export interface FunctionKeywordToken {
  readonly kind: 'FunctionKeyword';
}
export interface GetKeywordToken {
  readonly kind: 'GetKeyword';
}
export interface GlobalKeywordToken {
  readonly kind: 'GlobalKeyword';
}
export interface IfKeywordToken {
  readonly kind: 'IfKeyword';
}
export interface ImplementsKeywordToken {
  readonly kind: 'ImplementsKeyword';
}
export interface ImportKeywordToken {
  readonly kind: 'ImportKeyword';
}
export interface InferKeywordToken {
  readonly kind: 'InferKeyword';
}
export interface InterfaceKeywordToken {
  readonly kind: 'InterfaceKeyword';
}
export interface IntrinsicKeywordToken {
  readonly kind: 'IntrinsicKeyword';
}
export interface IsKeywordToken {
  readonly kind: 'IsKeyword';
}
export interface KeyOfKeywordToken {
  readonly kind: 'KeyOfKeyword';
}
export interface LetKeywordToken {
  readonly kind: 'LetKeyword';
}
export interface ModuleKeywordToken {
  readonly kind: 'ModuleKeyword';
}
export interface NamespaceKeywordToken {
  readonly kind: 'NamespaceKeyword';
}
export interface NeverKeywordToken {
  readonly kind: 'NeverKeyword';
}
export interface NewKeywordToken {
  readonly kind: 'NewKeyword';
}
export interface NullKeywordToken {
  readonly kind: 'NullKeyword';
}
export interface NumberKeywordToken {
  readonly kind: 'NumberKeyword';
}
export interface ObjectKeywordToken {
  readonly kind: 'ObjectKeyword';
}
export interface OfKeywordToken {
  readonly kind: 'OfKeyword';
}
export interface PackageKeywordToken {
  readonly kind: 'PackageKeyword';
}
export interface RequireKeywordToken {
  readonly kind: 'RequireKeyword';
}
export interface ReturnKeywordToken {
  readonly kind: 'ReturnKeyword';
}
export interface SatisfiesKeywordToken {
  readonly kind: 'SatisfiesKeyword';
}
export interface SetKeywordToken {
  readonly kind: 'SetKeyword';
}
export interface StringKeywordToken {
  readonly kind: 'StringKeyword';
}
export interface SuperKeywordToken {
  readonly kind: 'SuperKeyword';
}
export interface SwitchKeywordToken {
  readonly kind: 'SwitchKeyword';
}
export interface SymbolKeywordToken {
  readonly kind: 'SymbolKeyword';
}
export interface ThisKeywordToken {
  readonly kind: 'ThisKeyword';
}
export interface ThrowKeywordToken {
  readonly kind: 'ThrowKeyword';
}
export interface TrueKeywordToken {
  readonly kind: 'TrueKeyword';
}
export interface TryKeywordToken {
  readonly kind: 'TryKeyword';
}
export interface TypeKeywordToken {
  readonly kind: 'TypeKeyword';
}
export interface TypeOfKeywordToken {
  readonly kind: 'TypeOfKeyword';
}
export interface UndefinedKeywordToken {
  readonly kind: 'UndefinedKeyword';
}
export interface UniqueKeywordToken {
  readonly kind: 'UniqueKeyword';
}
export interface UnknownKeywordToken {
  readonly kind: 'UnknownKeyword';
}
export interface VarKeywordToken {
  readonly kind: 'VarKeyword';
}
export interface VoidKeywordToken {
  readonly kind: 'VoidKeyword';
}
export interface WhileKeywordToken {
  readonly kind: 'WhileKeyword';
}
export interface WithKeywordToken {
  readonly kind: 'WithKeyword';
}
export interface YieldKeywordToken {
  readonly kind: 'YieldKeyword';
}
