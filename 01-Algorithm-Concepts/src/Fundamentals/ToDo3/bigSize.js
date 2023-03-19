module.exports = (array) => {
	let newArray = [];

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		
		element > 0
			? newArray.push("big")
			: newArray.push(element)
	}

	console.log(newArray);
}