
var Item = require('../../src/js/item.js');
var Pos = require('../../src/js/pos.js');
var Order = require('../../src/js/order.js');

var orderList = [];
var pos;

describe("Pos test", function(){
	beforeEach(function(){
		var item = new Item(1, 10);
		var order = new Order(item, 1);
		var orderList = [];
		orderList.push(order);

		pos = new Pos();

		pos.checkout(orderList);
	});

	it('should get subtotal list', function(){
		var subtotalList = pos.getSubtotalList();

		expect(subtotalList.length).toBe(1);
		expect(subtotalList[0].getId()).toBe(1);
		expect(subtotalList[0].getNum()).toBe(1);
		expect(subtotalList[0].getCost()).toBe(10);
	});

	it('should get total cost', function(){
		var total = pos.getTotal();

		expect(pos.getTotal()).toBe(10);
	});
});
