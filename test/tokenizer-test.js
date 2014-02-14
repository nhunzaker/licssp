require('chai').should();

describe("Tokenizer", function() {
	var tokenize = require("../src/tokenizr");

	it ("can break up text", function() {
		tokenize("(+ 1 1)").should.eql(['(', '+', '1', '1', ')']);
	});
});
