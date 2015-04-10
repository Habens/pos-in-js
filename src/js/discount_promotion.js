
function DiscountPromotion(idDiscountMap) {
	var idDiscountMap = idDiscountMap;

	this.contains = function(id) {
		return (id in idDiscountMap);
	};

	this.calculate = function(id, price, num) {
		return (price*num*idDiscountMap[id])/100;
	};
}

module.exports = DiscountPromotion;

