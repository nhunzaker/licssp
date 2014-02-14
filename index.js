var parse = require('./parser');
var evale = require('./eval');

var program = "(begin (define r 3) (* 3.141592653 (* r r)))";

var result = evale(parse("(max (+ 1 9) (+ 1 1 5))"));

console.log(result);
