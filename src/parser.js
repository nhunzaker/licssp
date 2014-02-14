var atom = require("./atomizer");
var tokenize = require('./tokenizr');

function read_from(tokens) {
	// Read an expression from a sequence of tokens.
	if (!tokens.length) throw SyntaxError('unexpected EOF while reading');

	var token = tokens.shift(),
	    L = [];

	if ('(' === token) {
		while (')' !== tokens[0]) {
			L.push(read_from(tokens));
		}
		tokens.shift();
		return L;
	} else {
		if (')' === token) {
			throw SyntaxError('unexpected )');
		} else {
			return atom(token);
		}
	}
}

module.exports = function read (string) {
	return read_from(tokenize(string));
};
