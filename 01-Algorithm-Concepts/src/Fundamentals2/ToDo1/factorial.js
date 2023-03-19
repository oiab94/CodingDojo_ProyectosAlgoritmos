module.exports = (value) => {
	let fact = 1;

	for (let i = 1; i < value + 1; i++) {
		fact *= i;
	}

	console.log(fact);
}