var _ = require('lodash');

module.exports = _.extend({},
	require('./math'),
	require('./lists'),
	require('./truth')
);
