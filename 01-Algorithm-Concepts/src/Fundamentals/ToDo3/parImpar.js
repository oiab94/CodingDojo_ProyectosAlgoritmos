module.exports = (array) => {
	let par = 0;
	let impar = 0;
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		
		if(array[index] % 2 === 0){
			par++;
			if (par === 3) {
				console.log("Aún más!");
				par = 0;
			}
		}
		impar++
		if(impar === 3){
			console.log("Eso es extraño!");
			impar = 0;
		}
	}
}