
var Parser = require('./parser.js');
var Pos = require('./pos.js');
var DiscountPromotion = require('./discount_promotion.js');
var SecondHalfPricePromotion = require('./second_half_price_promotion.js');

var parser = new Parser();

var orderMap = parser.read("src/resources/cart.txt").parseWithToken("-").getMap();
var idDiscountMap = parser.read("src/resources/discount_promotion.txt").parseWithToken(":").getMap();
var secondHalfPriceList = parser.read("src/resources/second_half_price_promotion.txt").getStrList();
var idPriceMap = parser.read("src/resources/item_list.txt").parseWithToken(":").getMap();

var discountPromotion = new DiscountPromotion(idDiscountMap);
var secondHalfPricePromotion = new SecondHalfPricePromotion(secondHalfPriceList);
var promotionList = [];
promotionList.push(discountPromotion, secondHalfPricePromotion);

var pos = new Pos(idPriceMap, promotionList);
var result = pos.checkout(orderMap).getResult();

console.log("\n-------------------------------");
console.log("subtotal:\nid\t\tnum\tcost:");

var subtotalList = result.getSubtotalList();
for (var i in subtotalList) {
	console.log(subtotalList[i].toString());
}

console.log("\n-------------------------------");
console.log("total:");

console.log(result.getTotal());
