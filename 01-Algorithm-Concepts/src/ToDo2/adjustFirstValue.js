module.exports = (array) => {
	array.length === array[0]
		? console.log("Perfecto!")
		: array[0] > array.length
				? console.log("Demasiado grande!")
				: console.log("Demasiado pequeño!");
}