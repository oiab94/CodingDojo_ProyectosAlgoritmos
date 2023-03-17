module.exports.multiplyOfFive = () => {
	let values = 0;

	for (let i = 512; i < 4097; i++) {
		if(i % 5 === 0){
			console.log(i);
			values++;
		}
	}

	return values;
}