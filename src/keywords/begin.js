var sequence = require('../sequence');

module.exports = {
	test: function(symbol) {
		return symbol[0] === 'begin';
	},

	compile: function(symbol, analyze) {
		symbol.shift();
		return sequence(symbol, analyze);
	}
};
