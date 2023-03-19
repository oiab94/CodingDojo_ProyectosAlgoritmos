module.exports.changeTwoWords = (myNumber, myName) => {
	const a = myNumber;
	const b = myName; 
	
	let aux = myNumber;

	myNumber = myName;
	myName = aux;

	return(b + " " + a);
}