const arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
	
	function removeDuplicates(arr) {
		return arr.filter((item,
			index) => arr.indexOf(item) === index);
	}
	console.log(removeDuplicates(arr));
