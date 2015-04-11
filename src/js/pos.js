
var Result = require('./result.js');
var Subtotal = require('./subtotal.js');

function Pos(idPriceMap, promotionList) {
	var idPriceMap = idPriceMap;
	var promotionList = promotionList;
	
	var result = {};
	var reset = function() {
		result = {};

	}

	this.getResult = function() {
		return result;
	}

	this.checkout = function(orderMap) {

		reset();
		var total = 0;
		var subtotalList = [];
		for (var i in orderMap) {
			var num = orderMap[i];
			var price = idPriceMap[i];
			var cost = price*num;
			
			for (var j in promotionList) {
				if (promotionList[j].contains(i)) {
					price = cost/num;
					cost = promotionList[j].calculate(i, price, num);
				}
			}
			subtotalList.push(new Subtotal(i, num, cost));
			total += cost;
		}
		result = new Result(subtotalList, total);
		return this;
	}
}

module.exports = Pos

