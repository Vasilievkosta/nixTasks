let maxDiff = (arr) => {
		if (arr.length === 0) return 0;
		arr.sort((a, b) => a - b);			
		return (arr[arr.length - 1] - arr[0]);
	}
	
	console.log( maxDiff( [-0, 1, 2, -3, 4, 5, -6] ));