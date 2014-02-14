var fs = require('fs');
var val = require('./src/eval');
var parse = require('./src/parser');

var program = "(begin (define r 3) (* 3.141592653 (* r r)))";
var program2 = '(+ "foo" "bar")';

fs.readFile('sample.el', function(err, content) {
	console.log(val(content.toString()));
});
