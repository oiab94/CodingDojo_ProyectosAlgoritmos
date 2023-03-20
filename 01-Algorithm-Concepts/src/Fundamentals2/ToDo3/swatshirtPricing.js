module.exports = (num) => {
	let value = 0;

	if(num >= 4){
		value = num * 20 * 0.35;
		console.log("Precio: ",value);
		return;
	}
	if(num >= 3){
		value = num * 20 * 0.19;
		console.log("Precio: ",value);
		return;
	}
	if(num >= 2){
		value = num * 20 * 0.09;
		console.log("Precio: ",value);
		return;
	}
	value = num * 20;
	console.log("Precio: ", value);
}