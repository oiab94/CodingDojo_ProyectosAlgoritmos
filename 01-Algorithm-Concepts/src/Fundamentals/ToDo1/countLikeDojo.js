module.exports.countLikeDojo = () => {
	for (let i = 1; i < 101; i++) {
		if (i % 5 === 0) {
			i % 10 === 0 
			? console.log("Dojo") 
			: console.log("Codificando");
		} else {
			console.log(i);
		}
	}
};
