module.exports = {
	test: function(symbol) {
		return symbol[0] === 'if';
	},

	compile: function(symbol, analyze) {
		return function (pproc, cproc, aproc) {
			return function (env) {
				return pproc(env)? cproc(env) : aproc(env);
			};
		}(analyze(symbol[1]), analyze(symbol[2]), analyze(symbol[3]));
	}
};
