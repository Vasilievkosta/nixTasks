let switcheroo = (str) => {		
		newstr = str.replace( /[ab]/gi, f => f == 'a' ? 'b' : 'a' );		
		console.log(newstr);
	}
	switcheroo('aaabcccbaaa');