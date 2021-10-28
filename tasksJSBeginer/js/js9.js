	let product = (arr) => {
		let res = 1;
		for (let i = 0; i < arr.length; i++) {
			res *= arr[i];
		}
		return res;
	}	
	console.log(product([1, 2, 3, 4]));	