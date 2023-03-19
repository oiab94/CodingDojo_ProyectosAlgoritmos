module.exports = (values) => {
	let array = [];

	for (let index = 1; index < values.length; index++) {
		const element = values[index];
		if(element > values[1])
		array.push(element);
	}

	console.log(array);
}