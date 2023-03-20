module.exports = (n) => {
	const sol = [0 , 1];

	if (n < 2)
		console.log(sol[n]);
	else
		for (let i = 2; i < n + 1; i++) {
			sol[i] = sol[i - 1] + sol[i - 2];
		}
	console.log(sol[n]);
}