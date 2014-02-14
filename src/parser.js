var atomize = require("./atomizer");
var tokenize = require('./tokenizr');

function read_from(tokens) {
	if (!tokens.length) {
		throw SyntaxError('unexpected EOF while reading');
	}

	var token = tokens.shift();

	if (token === '(') {
		var L = [];
		while (')' !== tokens[0]) {
			L.push(read_from(tokens));
		}
		tokens.shift();
		return L;
	} else if (token === ')') {
		throw SyntaxError('unexpected )');
	} else {
		return atomize(token);
	}
}

module.exports = function read (string) {
	return read_from(tokenize(string));
};
