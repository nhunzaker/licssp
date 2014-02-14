var environment = require("./environment");
var core = require('./lib');
var _ = require('lodash');

function decorate (env) {
	_.extend(env, core);
	return env;
};

var base = environment({
	params: [],
	args: [],
	outer: undefined
});

module.exports = decorate(base);
