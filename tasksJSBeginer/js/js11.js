let total = [];
	let example = (arr1, arr2) => {
		let res = [arr1, arr2];
		
		for (let i = 0; i < 2; i++) {
			let prod = 1;
			res[i].forEach(x => (prod *= x));
			total.push(prod);
		}
		return (total[0] - total[1]);
	}
	
	console.log(example([3,2,5], [1,4,4]));