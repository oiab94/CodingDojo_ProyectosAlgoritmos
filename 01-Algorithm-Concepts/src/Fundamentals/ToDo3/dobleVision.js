module.exports = (values) => {
	let array = [];

	for (let index = 0; index < values.length; index++) {
		const element = values[index];
		array.push(element * 2);
	}

	return(array);
}