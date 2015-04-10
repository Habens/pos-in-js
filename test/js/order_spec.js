
var Item = require('../../src/js/item.js');
var Order = require('../../src/js/order.js');

var item;
var order;

beforeEach(function(){
});

afterEach(function(){
});

describe("Order test", function() {
	it('should create new order', function() {
		item = new Item("E001", 100);

		order = new Order(item, 1);
		
		expect(order.getItem().getId()).toEqual("E001");
		expect(order.getItem().getPrice()).toBe(100);
		expect(order.getNum()).toBe(1);
	});
});
