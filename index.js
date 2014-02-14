var parse = require('./src/parser');
var evale = require('./src/eval');

var program = "(begin (define r 3) (* 3.141592653 (* r r)))";

var result = evale(parse(program));

console.log(result);
