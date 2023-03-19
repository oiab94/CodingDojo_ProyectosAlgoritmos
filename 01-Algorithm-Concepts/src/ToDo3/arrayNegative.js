module.exports = (array) => {
	let newArray = [];

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		element > 0
			? newArray.push(-1 * element)
			: newArray.push(element)
	}

	return(newArray);
}