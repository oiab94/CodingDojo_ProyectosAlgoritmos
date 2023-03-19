module.exports = (a, b) => {
	let suma = 0;

	for (let i = a; i < b; i++) {	
		if( (i % 15 !== 0) )
			suma += i;
	}

	console.log(suma);
}