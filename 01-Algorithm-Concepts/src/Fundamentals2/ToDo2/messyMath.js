module.exports = (num) => {
	let suma = 0;

	for (let i = 0; i <= num; i++) {
		if((suma+i) % 3 === 0){
			suma += 0;
		} 
		if((suma+i) % 7 === 0){
			suma += (2 * i);
		} 
		if(((suma+i) / 3) === num) {
			suma = -1;
		}
		else{
			suma += i;
		}
	}

	console.log(suma);
}