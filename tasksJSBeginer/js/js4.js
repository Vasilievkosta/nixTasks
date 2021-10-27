let changeArr = ['Саша', 'Петя', 'Оксана'];
	let notChangeArr = ['Саша', 'Петя', 'Оксана'];
	
	changeArr.reverse();
	changeArr[1] = 'Олег';
	let newArr = notChangeArr.slice().reverse();
	newArr[1] = 'Олег';
	console.log(notChangeArr);
	console.log(changeArr);
	console.log(newArr);