
function Item(id, price) {
	var id = id;
	var price = price;

	this.getId = function() {
		return id;
	};

	this.getPrice = function() {
		return price; 
	};

	this.cost = function(num) {
		return price*num;
	};
}

module.exports = Item

