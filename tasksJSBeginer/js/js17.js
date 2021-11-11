let divisibleByThree = (str) => {
		let a = str / 3;
		return ( Math.trunc(a) === a );		
	}
	console.log( divisibleByThree('19254') );