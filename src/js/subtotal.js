
function Subtotal(id, num, cost){
	var id = id;
	var num = num;
	var cost = cost;

	this.getId = function() {
		return id;
	};

	this.getNum = function() {
		return num;
	};

	this.getCost = function() {
		return cost;
	};

	this.toString = function() {
		return id+"\t"+num+"\t"+cost;
	}
};

module.exports = Subtotal

