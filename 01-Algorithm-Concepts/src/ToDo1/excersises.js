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