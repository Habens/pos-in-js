
var Parser = require('../../src/js/parser.js');
var Pos = require('../../src/js/pos.js');

var parser = new Parser();

var idPriceMap = parser.read("src/resources/item_list.txt").parseWithToken(":").getMap();

describe("Parser test", function() {

	var pos = new Pos(idPriceMap);

	it('str checkout', function() {
		var orderMap = [{key:'ITEM00001', value:1}];

		var result = pos.checkout(orderMap).getResult();

		/*expect(result.getTotal()).toBe(100);*/

	});
});

