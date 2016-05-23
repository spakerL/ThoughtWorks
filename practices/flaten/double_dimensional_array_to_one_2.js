'use strict';

function double_to_one(collection) {
	var array = [];
	var array_1 = new Array();
	for(var i = 0;i<collection.length;i++){
		for(var j = 0;j<collection[i].length;j++){
			array.push(collection[i][j]);
		}	
	}
	for(var i in array){
		if(array_1.indexOf(array[i]) == -1){
			array_1.push(array[i]);
		}
	}
	return array_1;
}

module.exports = double_to_one;
