module.exports = (array) => {
	let count = 0;

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		
		element > 0 
			? count++
			: null
	}

	array[array.length - 1] = count;

	return array;
}