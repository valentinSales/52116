import valeListener from './generated/valeListener.js';

export class CustomValeListener extends valeListener {
    constructor() {
        super();
        this.syntaxTree = [];
    }

    enterEveryRule(ctx) {
        this.syntaxTree.push({
            rule: valeParser.ruleNames[ctx.ruleIndex],
            text: ctx.getText(),
            line: ctx.start.line
        });
    }
}