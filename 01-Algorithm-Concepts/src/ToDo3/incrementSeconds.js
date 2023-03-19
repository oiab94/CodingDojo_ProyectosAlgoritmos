module.exports = (array) => {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element % 3 === 0) {
			array[index] = 1;
		}
	}
	console.log(array);
	return array;
}