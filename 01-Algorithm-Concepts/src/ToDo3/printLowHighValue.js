module.exports = (array) => {
	array.sort(function (a , b) {
		return a - b;
	});

	console.log("Low: ", array[0], "High: ", array[array.length - 1]);
}