module.exports = (num1 , num2) => {
	let array = new Array(num1);

	for (let index = 0; index < array.length; index++)
		array[index] = num2;

	if (num1 === num2)
		console.log("Jinx!");

	return array;
}