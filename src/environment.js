module.exports = function env (spec) {
	var i,
	    env = {},
	    outer = spec.outer || {};

	if (0 !== spec.params.length) {
		for (i = 0; i < spec.params.length; i += 1) {
			env[spec.params[i]] = spec.args[i];
		}
	}

	env.get_outer = function() {
		return outer;
	};

	env.find = function (variable) {
		return env.hasOwnProperty(variable)? env : outer.find(variable);
	};

	return env;
};
