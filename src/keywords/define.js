module.exports = {
	test: function(symbol) {
		return symbol[0] === 'define';
	},

	compile: function(symbol, analyze) {
		return function (vvar, vproc) {
			return function (env) {
				env[vvar] = vproc(env);
			};
		}(symbol[1], analyze(symbol[2]));
	}
};
