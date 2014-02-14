//(set! var exp)

module.exports = {
	test: function(symbol) {
		return symbol[0] === 'set!';
	},

	compile: function(symbol, analyze) {
		return function (vvar, vproc) {
			return function (env) {
				env.find(vvar)[vvar] = vproc(env);
			};
		}(symbol[1], analyze(symbol[2]));
	}
};
