require('chai').should();

describe("Eval", function() {
	var val = require("../src/eval");

	it ("throws a reference error when an undefined value is presented", function() {
		try {
			val('test');
		} catch (x) {
			x.should.be.an.instanceof(ReferenceError);
		}
	});

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
