
function Subtotal(id, num, cost){
	var id = id;
	var num = num;
	var cost = cost;

	this.getId = function() {
		return id;
	}

	this.getNum = function() {
		return num;
	}

	this.getCost = function() {
		return cost;
	}
};

function Pos() {
	var total = 0;
	var subtotalList = [];

	var reset = function() {
		total = 0;
		subtotalList = [];
	}

	this.checkout = function(orderList) {
		
		reset();

		for (var i in orderList) {
			var id = orderList[i].getItem().getId();
			var num = orderList[i].getNum();
			var cost = orderList[i].getItem().cost(num);
			
			var subtotal = new Subtotal(id, num, cost);

			subtotalList.push(subtotal);
			total += cost;
		}
	}

	this.getSubtotalList = function() {
		return subtotalList;
	}
	
	this.getTotal = function() {
		return total;
	}
}

module.exports = Pos

