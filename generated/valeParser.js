// Generated from c:/Users/valen/ssl-antlr-calculator/vale.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import valeListener from './valeListener.js';
import valeVisitor from './valeVisitor.js';

const serializedATN = [4,1,24,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,12,
0,27,9,0,1,0,1,0,1,1,1,1,1,1,3,1,34,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,5,5,59,8,5,10,
5,12,5,62,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,3,7,71,8,7,1,8,1,8,1,8,5,8,76,
8,8,10,8,12,8,79,9,8,1,9,1,9,1,9,5,9,84,8,9,10,9,12,9,87,9,9,1,10,1,10,1,
10,1,10,1,10,1,10,3,10,95,8,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,
3,1,0,7,12,1,0,14,15,1,0,16,17,94,0,25,1,0,0,0,2,33,1,0,0,0,4,35,1,0,0,0,
6,43,1,0,0,0,8,48,1,0,0,0,10,56,1,0,0,0,12,65,1,0,0,0,14,67,1,0,0,0,16,72,
1,0,0,0,18,80,1,0,0,0,20,94,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,27,1,
0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,
0,1,29,1,1,0,0,0,30,34,3,4,2,0,31,34,3,6,3,0,32,34,3,8,4,0,33,30,1,0,0,0,
33,31,1,0,0,0,33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,1,0,0,36,37,3,10,5,0,37,
38,5,2,0,0,38,39,5,19,0,0,39,40,3,12,6,0,40,41,5,20,0,0,41,42,5,23,0,0,42,
5,1,0,0,0,43,44,5,5,0,0,44,45,5,13,0,0,45,46,3,12,6,0,46,47,5,23,0,0,47,
7,1,0,0,0,48,49,5,3,0,0,49,50,5,18,0,0,50,51,5,4,0,0,51,52,5,19,0,0,52,53,
3,12,6,0,53,54,5,20,0,0,54,55,5,23,0,0,55,9,1,0,0,0,56,60,5,21,0,0,57,59,
3,2,1,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,
0,0,0,62,60,1,0,0,0,63,64,5,22,0,0,64,11,1,0,0,0,65,66,3,14,7,0,66,13,1,
0,0,0,67,70,3,16,8,0,68,69,7,0,0,0,69,71,3,16,8,0,70,68,1,0,0,0,70,71,1,
0,0,0,71,15,1,0,0,0,72,77,3,18,9,0,73,74,7,1,0,0,74,76,3,18,9,0,75,73,1,
0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,17,1,0,0,0,79,77,1,0,
0,0,80,85,3,20,10,0,81,82,7,2,0,0,82,84,3,20,10,0,83,81,1,0,0,0,84,87,1,
0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,19,1,0,0,0,87,85,1,0,0,0,88,95,5,5,
0,0,89,95,5,6,0,0,90,91,5,19,0,0,91,92,3,12,6,0,92,93,5,20,0,0,93,95,1,0,
0,0,94,88,1,0,0,0,94,89,1,0,0,0,94,90,1,0,0,0,95,21,1,0,0,0,7,25,33,60,70,
77,85,94];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class valeParser extends antlr4.Parser {

    static grammarFileName = "vale.g4";
    static literalNames = [ null, "'do'", "'while'", "'console'", "'log'", 
                            null, null, "'>'", "'<'", "'>='", "'<='", "'=='", 
                            "'!='", "'='", "'+'", "'-'", "'*'", "'/'", "'.'", 
                            "'('", "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "DO", "WHILE", "CONSOLE", "LOG", "Identifier", 
                             "Number", "GT", "LT", "GTE", "LTE", "EQ", "NEQ", 
                             "ASSIGN", "PLUS", "MINUS", "MULT", "DIV", "DOT", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "doWhileStatement", "assignmentStatement", 
                         "consoleStatement", "block", "expression", "comparisonExpression", 
                         "additiveExpression", "multiplicativeExpression", 
                         "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = valeParser.ruleNames;
        this.literalNames = valeParser.literalNames;
        this.symbolicNames = valeParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, valeParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 42) !== 0)) {
	            this.state = 22;
	            this.statement();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(valeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, valeParser.RULE_statement);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.doWhileStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.assignmentStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhileStatement() {
	    let localctx = new DoWhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, valeParser.RULE_doWhileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(valeParser.DO);
	        this.state = 36;
	        this.block();
	        this.state = 37;
	        this.match(valeParser.WHILE);
	        this.state = 38;
	        this.match(valeParser.LPAREN);
	        this.state = 39;
	        this.expression();
	        this.state = 40;
	        this.match(valeParser.RPAREN);
	        this.state = 41;
	        this.match(valeParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, valeParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(valeParser.Identifier);
	        this.state = 44;
	        this.match(valeParser.ASSIGN);
	        this.state = 45;
	        this.expression();
	        this.state = 46;
	        this.match(valeParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, valeParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(valeParser.CONSOLE);
	        this.state = 49;
	        this.match(valeParser.DOT);
	        this.state = 50;
	        this.match(valeParser.LOG);
	        this.state = 51;
	        this.match(valeParser.LPAREN);
	        this.state = 52;
	        this.expression();
	        this.state = 53;
	        this.match(valeParser.RPAREN);
	        this.state = 54;
	        this.match(valeParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, valeParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(valeParser.LBRACE);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 42) !== 0)) {
	            this.state = 57;
	            this.statement();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this.match(valeParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, valeParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.comparisonExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonExpression() {
	    let localctx = new ComparisonExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, valeParser.RULE_comparisonExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.additiveExpression();
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8064) !== 0)) {
	            this.state = 68;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8064) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 69;
	            this.additiveExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, valeParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.multiplicativeExpression();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 73;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 74;
	            this.multiplicativeExpression();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, valeParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.term();
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16 || _la===17) {
	            this.state = 81;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 82;
	            this.term();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, valeParser.RULE_term);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(valeParser.Identifier);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.match(valeParser.Number);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.match(valeParser.LPAREN);
	            this.state = 91;
	            this.expression();
	            this.state = 92;
	            this.match(valeParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

valeParser.EOF = antlr4.Token.EOF;
valeParser.DO = 1;
valeParser.WHILE = 2;
valeParser.CONSOLE = 3;
valeParser.LOG = 4;
valeParser.Identifier = 5;
valeParser.Number = 6;
valeParser.GT = 7;
valeParser.LT = 8;
valeParser.GTE = 9;
valeParser.LTE = 10;
valeParser.EQ = 11;
valeParser.NEQ = 12;
valeParser.ASSIGN = 13;
valeParser.PLUS = 14;
valeParser.MINUS = 15;
valeParser.MULT = 16;
valeParser.DIV = 17;
valeParser.DOT = 18;
valeParser.LPAREN = 19;
valeParser.RPAREN = 20;
valeParser.LBRACE = 21;
valeParser.RBRACE = 22;
valeParser.SEMI = 23;
valeParser.WS = 24;

valeParser.RULE_program = 0;
valeParser.RULE_statement = 1;
valeParser.RULE_doWhileStatement = 2;
valeParser.RULE_assignmentStatement = 3;
valeParser.RULE_consoleStatement = 4;
valeParser.RULE_block = 5;
valeParser.RULE_expression = 6;
valeParser.RULE_comparisonExpression = 7;
valeParser.RULE_additiveExpression = 8;
valeParser.RULE_multiplicativeExpression = 9;
valeParser.RULE_term = 10;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_program;
    }

	EOF() {
	    return this.getToken(valeParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_statement;
    }

	doWhileStatement() {
	    return this.getTypedRuleContext(DoWhileStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_doWhileStatement;
    }

	DO() {
	    return this.getToken(valeParser.DO, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	WHILE() {
	    return this.getToken(valeParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(valeParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(valeParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(valeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterDoWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitDoWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitDoWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(valeParser.Identifier, 0);
	};

	ASSIGN() {
	    return this.getToken(valeParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(valeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(valeParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(valeParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(valeParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(valeParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(valeParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(valeParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(valeParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(valeParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_expression;
    }

	comparisonExpression() {
	    return this.getTypedRuleContext(ComparisonExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_comparisonExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	GT() {
	    return this.getToken(valeParser.GT, 0);
	};

	LT() {
	    return this.getToken(valeParser.LT, 0);
	};

	GTE() {
	    return this.getToken(valeParser.GTE, 0);
	};

	LTE() {
	    return this.getToken(valeParser.LTE, 0);
	};

	EQ() {
	    return this.getToken(valeParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(valeParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitComparisonExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitComparisonExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(valeParser.PLUS);
	    } else {
	        return this.getToken(valeParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(valeParser.MINUS);
	    } else {
	        return this.getToken(valeParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_multiplicativeExpression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(valeParser.MULT);
	    } else {
	        return this.getToken(valeParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(valeParser.DIV);
	    } else {
	        return this.getToken(valeParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = valeParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(valeParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(valeParser.Number, 0);
	};

	LPAREN() {
	    return this.getToken(valeParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(valeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof valeListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof valeVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




valeParser.ProgramContext = ProgramContext; 
valeParser.StatementContext = StatementContext; 
valeParser.DoWhileStatementContext = DoWhileStatementContext; 
valeParser.AssignmentStatementContext = AssignmentStatementContext; 
valeParser.ConsoleStatementContext = ConsoleStatementContext; 
valeParser.BlockContext = BlockContext; 
valeParser.ExpressionContext = ExpressionContext; 
valeParser.ComparisonExpressionContext = ComparisonExpressionContext; 
valeParser.AdditiveExpressionContext = AdditiveExpressionContext; 
valeParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
valeParser.TermContext = TermContext; 
