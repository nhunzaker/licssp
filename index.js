var val = require('./src/eval');

var program = "(begin (define r 3) (* 3.141592653 (* r r)))";
var program2 = '(+ "foo" "bar")';

console.log(val(program));
console.log(val(program2));
