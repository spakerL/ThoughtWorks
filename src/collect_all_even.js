
function collect_same_elements(collection_a, object_b) {
	var arrayA = [];
	var arrayB = [];
	var result = [];
	for(var i = 0;i<collection_a.length;i++){
		arrayA.push(collection_a[i].key);
	}
	for(var i = 0;i<object_b.value.length;i++){
		arrayB.push(object_b.value[i]);
	}
	for(var i = 0;i<arrayA.length;i++){
		for(var j = 0;j<arrayB.length;j++){
			if(arrayA[i] == arrayB[j]){
				result.push(arrayB[j]);
			}
		}
	}
	return result;
}

module.exports = collect_same_elements;
