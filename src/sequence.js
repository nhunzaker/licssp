module.exports = function (x, analyze) {
	var procs = analyze.map(analyze);

	return function (env) {
		var result, i;

		for (i = 0; i < procs.length; i += 1) {
			result = procs[i](env);
		}

		return result;
	};
};
