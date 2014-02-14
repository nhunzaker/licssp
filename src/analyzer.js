var invoke = require('./invoke');

var keyString = require('./keywords/string');
var keyNumber = require('./keywords/number');
var keyQuote  = require('./keywords/quote');
var keyIf     = require('./keywords/if');
var keySet    = require('./keywords/set');
var keyDefine = require('./keywords/define');
var keyLambda = require('./keywords/lambda');
var keyBegin  = require('./keywords/begin');

var analyze = module.exports = function (x) {
	if (keyString.test(x)) {
		return keyString.compile(x);
	}
	else if (keyNumber.test(x)) {
		return keyNumber.compile(x);
	}
	else if (keyQuote.test(x)) {
		return keyQuote.compile(x);
	}
	else if (keyIf.test(x)) {
		return keyQuote.compile(x, analyze);
	}
	else if (keySet.test(x)) {
		return keySet.compile(x, analyze);
	}
	else if (keyDefine.test(x)) {
		return keyDefine.compile(x, analyze);
	}
	else if (keyLambda.test(x)) {
		return keyLambda.compile(x, analyze);
	}
	else if (keyBegin.test(x)) {
		return keyBegin.compile(x);
	}
	else { //(proc exp*)
		return invoke(x, analyze);
	}
};
