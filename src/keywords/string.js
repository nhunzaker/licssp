var isWrappedString = /^\"(.+)\"$/;

function parseString(str, env) {
	var isQuoted = str.match(isWrappedString);

	if (isQuoted) {
		return isQuoted[1];
	}

	return env.find(str.valueOf())[str.valueOf()];
}

module.exports = {
	test: function(symbol) {
		return typeof symbol === 'string';
	},

	compile: function(symbol) {
		return function(env) {
			return parseString(symbol, env);
		};
	}
};
