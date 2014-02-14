var _ = require('lodash');

var reduce = function(fn) {
	return function() {
		var args = _.toArray(arguments);
		var first = args.shift();

		return _.reduce(args, fn, first);
	};
};

var math = {};
var mathMethods = [
	'abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor',
	'log', 'max', 'min', 'pow', 'random', 'round', 'sin', 'sqrt', 'tan'
], i;

for (i = 0; i < mathMethods.length; i += 1) {
	math[mathMethods[i]] = Math[mathMethods[i]];
}

module.exports = _.extend(math, {
	'+': reduce(function(a, b) {
		return a + b;
	}),

	'-': reduce(function(a, b) {
		return a - b;
	}),

	'*': reduce(function(a, b) {
		return a * b;
	}),

	'/': reduce(function(a, b) {
		return a / b;
	}),

	'>': function(a, b) {
		return a > b;
	},

	'<': function(a, b) {
		return a < b;
	},

	'>=': function(a, b) {
		return a >= b;
	},

	'<=': function(a, b) {
		return a <= b;
	},

	'=': function(a, b) {
		return a === b;
	},

	'mod': function(a, b) {
		return a % b;
	}
});
