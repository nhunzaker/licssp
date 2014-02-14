var environment = require('./environment');

var analyze = module.exports = function (x) {
	if (typeof x === 'string') {	//variable reference
		return function (env) {
			return env.find(x.valueOf())[x.valueOf()];
		};
	}
	else if (typeof x === 'number') {	//constant literal
		return function (env) { return x; };
	}
	else if (x[0] === 'quote') {	//(quote exp)
		var qval = x[1];
		return function (env) { return  qval; };
	}
	else if (x[0] === 'if') {		//(if test conseq alt)
		return function (pproc, cproc, aproc) {
			return function (env) {
				return pproc(env)? cproc(env) : aproc(env);
			};
		}(analyze(x[1]), analyze(x[2]), analyze(x[3]));
	}
	else if (x[0] === 'set!') {			//(set! var exp)
		return function (vvar, vproc) {
			return function (env) { env.find(vvar)[vvar] = vproc(env); };
		}(x[1], analyze(x[2]));
	}
	else if (x[0] === 'define') {	//(define var exp)
		return function (vvar, vproc) {
			return function (env) { env[vvar] = vproc(env); };
		}(x[1], analyze(x[2]));
	}
	else if (x[0] === 'lambda') {	//(lambda (var*) exp)
		return analyze_lambda(x);
	}
	else if (x[0] === 'begin') {	//(begin exp*)
		x.shift();
		return analyze_sequence(x);
	}
	else {				//(proc exp*)
		var aprocs = x.map(analyze);
		var fn = aprocs.shift();

		return function (env) {
			var args = aprocs.map(function (aproc) {
				return aproc(env);
			});
			return fn(env).apply(env, args);
		};
	}
};

var analyze_lambda = function (x) {
	var vars = x[1];
	var bproc = analyze_sequence([x[2]]);

	return function (env) {
		return function () {
			return bproc(environment({
				params: vars,
				args: arguments,
				outer: env
			}));
		};
	};
};

var analyze_sequence = function (x) {
	var procs = x.map(analyze);

	return function (env) {
		var result, i;

		for (i = 0; i < procs.length; i += 1) {
			result = procs[i](env);
		}

		return result;
	};
};
