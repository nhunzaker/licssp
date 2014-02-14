var analyze = require('./analyzer');
var parse = require('./parser');
var global = require('./global');

module.exports = function (x) {
	var parsed = parse(x);
	return analyze(parsed)(global);
};
