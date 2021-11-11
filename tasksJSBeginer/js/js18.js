let spacey = (arr) => {
	console.log('Task - 18.');
		let out = '';
		let res = [];
		for (let i = 0; i < arr.length; i++) {
			out += arr[i];
			res.push(out);
		}
		console.log(res);
	}
	spacey(['kevin', 'has','no','space']);