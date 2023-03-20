module.exports = (num) => {
	let aux = num;
	let digit = -1;

	while(aux > 0){
		if((aux % 10) > digit){
			digit = Math.floor(aux % 10);
		}
		aux = aux / 10;
	}

	console.log("numero: ", digit);
}