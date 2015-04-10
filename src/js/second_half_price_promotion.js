
function SecondHalfPricePromotion(secondHalfPriceList) {
	var secondHalfPriceList = secondHalfPriceList;

	this.contains = function(id) {
		return (id in secondHalfPriceList);
	}

	this.calculate = function(id, price, num) {
		return (price*num - (price*num) / num / 2) * (num / 2);
	}
}

module.exports = SecondHalfPricePromotion

