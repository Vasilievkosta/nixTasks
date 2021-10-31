let hexToDec = (str) => {
	str = str.toUpperCase();
	let x = 0;
	let count = 0;
	let res = 0;	
		for (let i = str.length - 1; i >= 0; i--) {			
			switch (str[i]) {			
				case 'A':
					x = 10;
				break;
				case 'B':
					x = 11;
				break;
				case 'C':
					x = 12;
				break;
				case 'D':
					x = 13;
				break;
				case 'E':
					x = 14;
				break;
				case 'F':
					x = 15;
				break;
					default: x = str[i];
				break;				
			}
			res += x * 16 ** count;			
			count++;
		}
		console.log(res);
	}
	
	hexToDec('ff');