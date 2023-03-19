module.exports = (array) => {
	let cont = array.length - 1;

	for (let index = 0; index < array.length; index++) {
		if (index === cont) {
			break;
		}
		let aux = array[index];
		array[index] = array[cont];
		array[cont] = aux;
		cont--;
	}

	console.log(array);
}