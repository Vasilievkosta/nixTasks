	let one = prompt('Введите первое число');
	let two = prompt('Введите второе число');
	let res;
	if (+one > +two) {
		res = +one + +two;		
	} else if (+one < +two) {
		res = +one * +two;
	} else {
		res = 'числа одинаковые';
	}
	alert(res);