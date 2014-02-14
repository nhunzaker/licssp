module.exports = function tokenize (string) {
	return string
		.replace(/\(/g, ' ( ')
		.replace(/\)/g, ' ) ')
		.replace(/\s+/g, ' ')
		.trim()
		.split(' ');
};
