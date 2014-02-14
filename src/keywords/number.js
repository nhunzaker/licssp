module.exports = {
	test: function(symbol) {
		return typeof symbol === 'number';
	},
	compile: function(symbol) {
		return function(env) {
			return symbol;
		};
	}
};
