module.exports = (value) => {
	let array = new Array(value + 1);

	for (let index = 0; index < array.length; index++) {
		array[index] = index;
	}

	console.log(`Length: ${value}`, " ", array);
}