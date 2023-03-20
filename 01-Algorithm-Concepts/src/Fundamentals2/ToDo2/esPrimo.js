module.exports = (num) => {
	let esPrimo = true;

	for (let i = 2; i < num; i++) {
		if(num % i === 0){
			console.log("No es primo");
			esPrimo = false;
			break;
		}
	}
	if (esPrimo) {
		console.log("Es primo");
	}
}