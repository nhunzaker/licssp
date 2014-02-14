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
		var isLocal = env.hasOwnProperty(variable);

		if (!isLocal && !outer.find) {
			throw ReferenceError("Symbol's definition is void: " + variable);
		}

		return isLocal? env : outer.find(variable);
	};

	env.styles = {};

	return env;
};
