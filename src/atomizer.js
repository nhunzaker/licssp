module.exports = function atom (token) {
	return isNaN(token)? token : +token;
};
