module.exports = (value) => {
	let suma = 0;

	for (let i = 1; i < value + 1; i++) {
		suma += i;
	}
	
	console.log(suma);
}