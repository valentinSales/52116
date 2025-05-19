grammar vale;

program
    : statement* EOF
    ;

statement
    : doWhileStatement
    | assignmentStatement
    | consoleStatement
    ;

doWhileStatement
    : DO block WHILE LPAREN expression RPAREN SEMI
    ;

assignmentStatement
    : Identifier ASSIGN expression SEMI
    ;

consoleStatement
    : CONSOLE DOT LOG LPAREN expression RPAREN SEMI
    ;

block
    : LBRACE statement* RBRACE
    ;

expression
    : comparisonExpression
    ;

comparisonExpression
    : additiveExpression ( (GT | LT | GTE | LTE | EQ | NEQ) additiveExpression )?
    ;

additiveExpression
    : multiplicativeExpression ( (PLUS | MINUS) multiplicativeExpression )*
    ;

multiplicativeExpression
    : term ( (MULT | DIV) term )*
    ;

term
    : Identifier
    | Number
    | LPAREN expression RPAREN
    ;

// ————— LEXER RULES —————

DO       : 'do';
WHILE    : 'while';
CONSOLE  : 'console';
LOG      : 'log';

Identifier
    : Letter (Letter | Digit | '_')*
    ;

Number
    : Digit+
    ;

// símbolos
GT    : '>';
LT    : '<';
GTE   : '>=';
LTE   : '<=';
EQ    : '==';
NEQ   : '!=';
ASSIGN: '=';
PLUS  : '+';
MINUS : '-';
MULT  : '*';
DIV   : '/';
DOT   : '.';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMI  : ';';

fragment Letter : [a-zA-Z] ;
fragment Digit  : [0-9] ;

WS : [ \t\r\n]+ -> skip ;
