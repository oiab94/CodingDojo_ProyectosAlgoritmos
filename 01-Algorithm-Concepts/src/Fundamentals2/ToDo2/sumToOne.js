module.exports = (num) => {
	let aux = num.toString();
	const array = [];
	let suma = 0;

	for (let i = 0; i < aux.length; i++) {
		array.push(+aux.charAt(i));
	}
	
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		suma = suma + element;
	}

	console.log(suma);
}