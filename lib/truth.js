module.exports = 	{
	'list?': function isList (x) {
		return x && typeof x === 'object' && x.constructor === Array ;
	},

	'null?': function isNull (x) {
		return (!x || x.length === 0);
	},

	'symbol?': function isSymbol (x) {
		return typeof x === 'string';
	}
}
