module.exports.changeTwoWords = (myNumber, myName) => {
	const a = myNumber;
	const b = myName; 
	
	let aux = myNumber;

	myNumber = myName;
	myName = aux;

	return(b + " " + a);
}

module.exports.printNumbers = () => {
	for (i = -52; i < 1067; i++) {
		console.log(i);
	}
}

module.exports.beCheerful = () => {
	for (let i = 0; i < 99; i++) {
		console.log("¡Buenos días!");		
	}
}

module.exports.multiply = () => {
	for (let i = -300; i < -6; i++) {
		if(i % 3 === 0)
			console.log(i);		
	}
}

module.exports.printNumbersWhile = () => {
	let i = 2000

	while (i < 5281) {
		console.log(i);
		i++;
	}
}