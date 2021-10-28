	let finalGrade = (exam, project) => {		
		if (exam > 90 || project > 10) return 100;
		if (exam > 75 || project > 5) return 90;
		if (exam > 50 || project > 2) return 75;
		return 0;
	}
	console.log(finalGrade(55, 0));