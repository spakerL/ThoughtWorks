'use strict';

function double_to_one(collection) {
	var array = [];
	array.push(collection[0]);
	for(var i = 0;i<collection.length;i++){
		if(collection.length[i] == 1){
			array.push(collection[1]);
		}
		for(var j = 0;j<collection[i].length;j++){
			array.push(collection[i][j]);
		}	
	}
	return array;
}

module.exports = double_to_one;
