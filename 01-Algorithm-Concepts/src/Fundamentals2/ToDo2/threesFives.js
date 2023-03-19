module.exports = () => {
	let suma = 0;

	for (let i = 1; i < 40000; i++) {	
		if( (i % 15 !== 0) )
			suma += i;
	}

	console.log(suma);
}