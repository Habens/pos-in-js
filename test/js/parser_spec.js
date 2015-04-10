
var Parser = require('../../src/js/parser.js');

describe("Parser test", function() {
	var parser;
	
	beforeEach(function(){
		parser = new Parser();
	});

	it('str contains token', function() {
		var map = parser.read("src/resources/cart.txt").parse("-");

		console.log(map);
		expect(map["ITEM000001"]).toBe(5);
		expect(map["ITEM000003"]).toBe(2);
		expect(map["ITEM000005"]).toBe(4);

	});
});
