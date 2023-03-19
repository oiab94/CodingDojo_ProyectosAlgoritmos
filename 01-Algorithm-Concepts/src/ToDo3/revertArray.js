module.exports = (array) => {
	let newArray = [];

	for (let index = array.length - 1 ; index > -1; index--) {
		const element = array[index];

		newArray.push(element);
	}
	
	return(newArray);
}