module.exports = (array, num) => {
	for (let index = 0; index < array.length; index++) {
		array[index] = array[index] * num;	
	}

	console.log(array);
	return array;
}