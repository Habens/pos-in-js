
var Item = require('../../src/js/item.js');

var item;

beforeEach(function(){
	 item = new Item("E001", 100);
});

afterEach(function(){
});

describe("Item test", function() {
	it('test how to use expect', function() {
		expect(item.getId()).toEqual("E001");
		expect(item.getPrice()).toBe(100);
		expect(item.cost(5)).toBe(500);
	});

	it('test how to use spyOn', function() {
		spyOn(item, "getId").and.returnValue("E002");
		expect(item.getId()).toEqual("E002");
		expect(item.getPrice()).toBe(100);
		expect(item.cost(5)).toBe(500);
	});
});
