require('chai').should();

describe("Eval", function() {
	var val = require("../src/eval");

	it ("can add numbers", function() {
		val('(+ 1 1)').should.equal(2);
	});

	it ("can add strings", function() {
		val('(+ \"foo\" \"bar\")').should.equal('foobar');
	});

	it ("can add strings", function() {
		val('(+ \"foo\" \"bar\")').should.equal('foobar');
	});
});
