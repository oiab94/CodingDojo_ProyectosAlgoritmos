module.exports = (cents) => {
	let values = ["quarters", "dimes", "nickels", "pennies"];
	let newCents = cents;
	let coins = [];

	coins.push(Math.floor(newCents / 25));
	newCents -= (coins[0]*25);

	coins.push(Math.floor(newCents / 10));
	newCents -= (coins[1]*10);

	coins.push(Math.floor(newCents / 5));
	newCents -= (coins[2]*5);

	coins.push(newCents);

	console.log(cents, " cambio a");
	for (let index = 0; index < values.length; index++) {
		const element = values[index];
		console.log(element, ": ", coins[index]);
	}
}