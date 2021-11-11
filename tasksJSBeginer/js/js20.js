let different = (arr) => {
		let arrType = [];
		let res = {};
		let miniArr = [];
		arr.map( el => {
			arrType.push(typeof(el) );
		})
		let setType = new Set(arrType);
		
		for (let item of setType) {
			miniArr = [];
			for(let i = 0; i < arr.length; i++) {
				
				if (item === typeof(arr[i])) {
					miniArr.push(arr[i]);
				}
				res[item] = miniArr;
			}
			console.log(`${item}: [${res[item]}]`);
		}
			<!-- console.log(JSON.stringify(res)); -->
		return res;
	}
	console.log( different(['a', 1, 2, false, 'b']) );