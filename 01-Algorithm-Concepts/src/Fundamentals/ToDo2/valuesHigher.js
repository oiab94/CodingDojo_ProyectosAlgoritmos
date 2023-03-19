module.exports = (array) => {
	for (let index = 1; index < array.length; index++) {
		if (array[index] > array[1] ) {
			console.log(array[index]);
		}
	}
}