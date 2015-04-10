
function Order(item, num) {
	var item = item;
	var num = num;

	this.getItem = function() {
		return item;
	};

	this.getNum = function() {
		return num;
	};

}

module.exports = Order

