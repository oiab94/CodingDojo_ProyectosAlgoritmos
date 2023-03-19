module.exports = (array) => {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		array[index] = element.length;
	}
	console.log(array);
}