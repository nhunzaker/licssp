var environment = require("./environment");
var coreLib = require('../lib');
var _ = require('lodash');

function decorate (env) {
	return _.extend(env, coreLib);
};

var base = environment({
	params: [],
	args: [],
	outer: undefined
});

module.exports = decorate(base);
