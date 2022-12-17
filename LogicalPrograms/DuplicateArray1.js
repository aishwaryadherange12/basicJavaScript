const arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
let count = 0;
	function removeDuplicateElement(arr) {
		let uniqueArr = [];
		arr.forEach(function(el){
			if (!uniqueArr.includes(el)) {
				uniqueArr.push(el);
                count++;
			}
		});
		return `${uniqueArr} Count=> ${count}`;
	}
	console.log(removeDuplicateElement(arr));
