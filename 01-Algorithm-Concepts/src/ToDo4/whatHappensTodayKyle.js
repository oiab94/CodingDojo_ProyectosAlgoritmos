module.exports = () => {
	getRandomInt = Math.floor(Math.random() * 6);

	switch (getRandomInt) {
		case 0:
			console.log("Volcanes");			
			break;
		case 1:
			console.log("Tsunamis");
			break;
		case 2:
			console.log("Terremotos");			
			break;
		case 3:
			console.log("Ventiscas");
			break;
		case 4:
			console.log("Meteoros");
			break;
		default:
			console.log("Nada pasara");
			break;
	}
}