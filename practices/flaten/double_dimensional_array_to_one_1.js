'use strict';

function double_to_one(collection) {
	var array = [];
	for(var i = 0;i<collection.length;i++){
		if(i == 0){
			array.push(collection[0]);
		}
		if(collection[i].lenght == 1){
			array.push(collection[i]);
		}
		else{
			for(var j = 0;j<collection[i].length;j++){
			array.push(collection[i][j]);
			}
		}	
	}
	return array;
}

module.exports = double_to_one;
