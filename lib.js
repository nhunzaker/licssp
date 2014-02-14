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

	'remainder': function(a, b) {
		return a % b;
	},
	'length': function length (x) {
		return x.length;
	},

	cons: function cons (x, y) {
		var arr = [x]; return arr.concat(y);
	},

	car: function car (x) {
		return (x.length !== 0) ? x[0] : null;
	},

	cdr: function cdr (x) {
		return (x.length > 1) ? x.slice(1) : null;
	},

	append: function append (x, y) {
		return x.concat(y);
	},

	list: function list() {
		return Array.prototype.slice.call(arguments);
	},

	'list?': function isList (x) {
		return x && typeof x === 'object' && x.constructor === Array ;
	},

	'null?': function isNull (x) {
		return (!x || x.length === 0);
	},

	'symbol?': function isSymbol (x) {
		return typeof x === 'string';
	}
});
