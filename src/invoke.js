module.exports = function(symbols, analyze) {
	var aprocs = symbols.map(analyze);
	var fn = aprocs.shift();

	return function (env) {
		var args = aprocs.map(function (aproc) {
			return aproc(env);
		});
		return fn(env).apply(env, args);
	};
};
