var analyze = require('./analyzer');
var global = require('./global');

module.exports = function (x) {
	return analyze(x)(global);
};
