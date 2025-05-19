import valeLexer  from "./generated/valeLexer.js";
import valeParser from "./generated/valeParser.js";
import { CustomValeVisitor } from "./CustomValeVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// ——— Interpreter corregido ———
class Interpreter extends CustomValeVisitor {
  constructor() {
    super();
    this.variables   = {};
    this.output      = [];
    this.symbolTable = [];
  }

  visitExpression(ctx) {
    return this.visit(ctx.comparisonExpression());
  }

  visitComparisonExpression(ctx) {
    const adds = ctx.additiveExpression();
    let left  = this.visit(adds[0]);
    if (adds.length === 2) {
      const right = this.visit(adds[1]);
      const op    = ctx.children[1].getText();
      switch (op) {
        case '>': return left > right;
        case '<': return left < right;
        case '>=': return left >= right;
        case '<=': return left <= right;
        case '==': return left == right;
        case '!=': return left != right;
      }
    }
    return left;
  }

  visitAdditiveExpression(ctx) {
    const terms = ctx.multiplicativeExpression();
    let result = this.visit(terms[0]);
    for (let i = 1; i < terms.length; i++) {
      const op  = ctx.children[i*2 - 1].getText();
      const val = this.visit(terms[i]);
      if (op === '+') result += val;
      else            result -= val;
    }
    return result;
  }

  visitMultiplicativeExpression(ctx) {
    const ts = ctx.term();
    let res  = this.visit(ts[0]);
    for (let i = 1; i < ts.length; i++) {
      const op  = ctx.children[i*2 - 1].getText();
      const val = this.visit(ts[i]);
      if (op === '*') res *= val;
      else if (op === '/') {
        if (val === 0) throw new Error(`División por cero en línea ${ctx.start.line}`);
        res /= val;
      }
    }
    return res;
  }

  visitTerm(ctx) {
    if (ctx.Identifier()) {
      const name = ctx.Identifier().getText();
      if (!(name in this.variables)) {
        throw new Error(`Variable no definida: ${name} en línea ${ctx.start.line}`);
      }
      return this.variables[name];
    }
    if (ctx.Number()) {
      return parseInt(ctx.Number().getText(), 10);
    }
    return this.visit(ctx.expression());
  }

  visitAssignmentStatement(ctx) {
    const name  = ctx.Identifier().getText();
    const value = this.visit(ctx.expression());
    this.symbolTable.push({
      identifier: name,
      type:       typeof value,
      value,
      line:       ctx.start.line
    });
    this.variables[name] = value;
    return value;
  }

  visitConsoleStatement(ctx) {
    const value = this.visit(ctx.expression());
    this.output.push(value);
    console.log(value);
    return value;
  }

  visitDoWhileStatement(ctx) {
    let cond;
    do {
      this.visit(ctx.block());
      cond = this.visit(ctx.expression());
    } while (cond);
  }
}

// ——— Programa principal ———
async function main() {
  let input;
  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch {
    input = await new Promise(res => {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      rl.question("Ingrese código: ", ans => { rl.close(); res(ans); });
    });
  }

  // 1) Análisis Léxico & Tabla
  console.log("\n=== Análisis Léxico ===");
  let inStream   = CharStreams.fromString(input);
  let lex        = new valeLexer(inStream);
  let tokStream  = new CommonTokenStream(lex);
  tokStream.fill();
  const tokens   = tokStream.tokens;
  const names    = lex.constructor.symbolicNames;

  console.log("\nTabla de Tokens y Lexemas:");
  console.log("--------------------------------------------------");
  console.log("| Lexema         | Token               | Línea  |");
  console.log("--------------------------------------------------");
  tokens
    .filter(t => t.type !== antlr4.Token.EOF)
    .forEach(t => {
      const tk = names[t.type] || "UNKNOWN";
      console.log(`| ${t.text.padEnd(14)} | ${tk.padEnd(18)} | ${String(t.line).padEnd(6)} |`);
    });
  console.log("--------------------------------------------------");

  // 2) Análisis Sintáctico & Árbol
  console.log("\n=== Análisis Sintáctico ===");
  inStream  = CharStreams.fromString(input);
  lex       = new valeLexer(inStream);
  tokStream = new CommonTokenStream(lex);
  const parser = new valeParser(tokStream);

  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(rec, sym, line, col, msg) {
      console.error(`Error sintáctico en línea ${line}:${col} - ${msg}`);
    }
  });
  const tree = parser.program();
  if (parser._syntaxErrors > 0) {
    console.error("\nSe encontraron errores de sintaxis.");
    return;
  }
  console.log(tree.toStringTree(parser.ruleNames));

  // 3) Mostrar y ejecutar JS original
  console.log("\n=== Código JavaScript (input.txt) ===");
  console.log(input);
  console.log("\n=== Ejecución directa en JS ===");
  try {
    // Ejecutar en su propio scope
    new Function(input)();
  } catch (e) {
    console.error("Error JS directo:", e.message);
  }

  // 4) Interpretación personalizada & Tabla de símbolos
  console.log("\n=== Interpretación personalizada ===");
  const interpreter = new Interpreter();
  try {
    interpreter.visit(tree);
    console.log("\nTabla de Símbolos:");
    console.table(interpreter.symbolTable);
    console.log("\nSalida del programa:");
    console.log(interpreter.output);
  } catch (e) {
    console.error("Error en interpretación:", e.message);
  }
}

main();
