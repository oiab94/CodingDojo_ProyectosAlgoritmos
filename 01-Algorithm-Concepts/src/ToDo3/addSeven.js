module.exports = (array) => {
	let newArray = [];

	newArray.push(array[0].toString())
	for (let index = 1; index < array.length; index++) {
		const element = array[index];
		newArray.push(element.toString() + "7")
	}

	return(newArray);
}