require('chai').should();

describe("Parser", function() {
	var parse = require("../src/parser");

	it ("can convert a simple statement into a tree of atoms", function() {
		parse("(+ 1 1)").should.eql(['+', 1, 1]);
	});

	it ("can convert complicated  statement to a tree of atoms", function() {
		parse("(+ (- 1 2) 1)").should.eql(['+', ['-', 1, 2], 1]);
	});
});
