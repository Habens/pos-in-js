
function SecondHalfPricePromotion(secondHalfPriceList) {
	var secondHalfPriceList = secondHalfPriceList;

	this.contains = function(id) {
		for (var i in secondHalfPriceList) {
			if (secondHalfPriceList[i] == id) {
				return true;
			}
		}
		return false;
	}

	this.calculate = function(id, price, num) {
		return price*num - (price/2) * (parseInt(num/2));
	}
}

module.exports = SecondHalfPricePromotion

