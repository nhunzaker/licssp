module.exports = {
	length: function length (x) {
		return x.length;
	},

	cons: function cons (x, y) {
		var arr = [x]; return arr.concat(y);
	},

	head: function first (x) {
		return (x.length !== 0) ? x[0] : null;
	},

	tail: function tail (x) {
		return (x.length > 1) ? x.slice(1) : null;
	},

	append: function append (x, y) {
		return x.concat(y);
	},

	list: function list() {
		return Array.prototype.slice.call(arguments);
	}
};
