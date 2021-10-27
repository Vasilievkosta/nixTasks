	let arr = [10, 20, 30, 50, 235, 3000];
	let res = [];
	let out = '';
	for (let i = 0; i < arr.length; i++) {
		res = String(arr[i]).split('');
		if (res[0] === "2" || res[0] === "1" || res[0] === "5") {
			out = out + ' ' +(arr[i]);
		}
	}
	alert(out);