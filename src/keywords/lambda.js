var environment = require('../environment');
var sequence = require('../sequence');

module.exports = {
	test: function(symbol) {
		return symbol[0] === 'define';
	},

	compile: function(symbol, analyze) {
		var vars = symbol[1];
		var bproc = sequence([symbol[2]], analyze);

		return function (env) {
			return function () {
				return bproc(environment({
					params: vars,
					args: arguments,
					outer: env
				}));
			};
		};
	}
};
