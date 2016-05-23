function calculate_median(arr) {
  		var array = [];
		var even = 2;
		var odd = 3;
		var middle = 0;
		var n = arr.length/2-1;
		var m = (arr.length-1)/2-1;
		if(arr.length<4){
			console.log('error');
		}
		
		else if(arr.length%2 == 0 ){
			for(var i = 0;i<n;i++){
				array.push(arr[arr.length-even]);
				even += 2;
			}			
			if(array.length%2 == 0){
				for(var i = 0;i<array.length;i++){
					middle += array[i];
				}
				return middle/array.length;
			}
			if(array.length%2 == 1){
				return array[(array.length-1)/2];
			}
		}
		
		else if(arr.length%2 == 1){
			for(var i = 0;i<m;i++){
				array.push(arr[arr.length-odd]);
				odd += 2;
			}
			if(array.length%2 == 0){
				for(var i = 0;i<array.length;i++){
					middle += array[i];
				}
				return middle/array.length;
			}
			if(array.length%2 == 1){
				return array[(array.length-1)/2];
			}
		}
}

module.exports = calculate_median;
