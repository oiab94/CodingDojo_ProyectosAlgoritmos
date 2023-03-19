module.exports = (array) => {
	let hayComida = false;

	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element === "comida") {
			console.log("delicioso");
			hayComida = true;
		}
	}

	hayComida 
		? null 
		:	console.log("Tengo hambre");
}