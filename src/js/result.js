
function Result(subtotalList, total) {
	var subtotalList = subtotalList;
	var total = total;

	this.getSubtotalList = function() {
		return subtotalList;
	};

	this.getTotal = function() {
		return total;
	};
}

module.exports = Result

