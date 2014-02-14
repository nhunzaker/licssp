module.exports = {
	test: function(symbol) {
		return symbol[0] === 'quote';
	},

	compile: function(symbol) {
		var value = symbol[1];

		return function (env) {
			return value;
		};
	}
};
