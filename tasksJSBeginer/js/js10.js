	let diff = (arr) => {
	let bad = ['Дима', 'Саша', 'Ольга', 'Никита'];
	return arr.filter(x => !bad.includes(x));
	}
	let example = ['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга', ];
	console.log(diff(example));