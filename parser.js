var isString = /^\"(.+)\"$/;

function tokenize (string) {
	return string
		.replace(/\(/g, ' ( ')
		.replace(/\)/g, ' ) ')
		.replace(/\s+/g, ' ')
		.trim()
		.split(' ');
}

function atom (token) {
	return isNaN(token)? token : +token;
}

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

function read (string) {
	// Read a Scheme expression from a string.
	return read_from(tokenize(string));
}

module.exports = read;
