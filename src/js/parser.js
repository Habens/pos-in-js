
var fs = require('fs');

function Parser() {
	var map;
	var strList;

	var convert = function(str, token) {
		var array = str.split(token);

		if (array.length > 2) {
			console.log("str error");
			exit(0);
		}

		return {
			key: array[0],
			value: array[1]?array[1]-'0':1,
		};
	};

	this.getMap = function() {
		return map;
	};

	this.getStrList = function() {
		return strList;
	};

	this.parse = function(token) {
		map = {};
		for (var i in strList) {
			var kv = convert(strList[i], token);
			if (kv.key in map) {
				map[kv.key] += kv.value;
			} else {
				map[kv.key] = kv.value;
			}
		}
		return map;
	};

	this.read = function(fileName) {
		strList = fs.readFileSync(fileName).toString().split("\n");
		console.log(strList);
		return this;
	};
}

module.exports = Parser

