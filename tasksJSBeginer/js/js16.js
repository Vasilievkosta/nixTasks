let example = (str, num) => {
		str = str.replace(/[,.:!?]/g, '');		
		let arr = str.split(' ');
		let res = [];		
		arr.map(el => {
			if (el.length > num) res.push(el);
		})
		return res;
	}
	console.log( example('Над городом облака, коридоры, берега, проспект, река.',7 ) );