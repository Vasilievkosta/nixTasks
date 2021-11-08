let remove = ( str, num ) => {
	let arr = str.split('');
	let newArr = [];
		for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '!') num--;
			if (arr[i] !== '!' || arr[i] === '!' && num < 0) {
				newArr.push(arr[i]);			
			}
		}		
		return newArr.join('');		
	}
	
	console.log(remove("!!!Hi !!hi!!! !hi",5));