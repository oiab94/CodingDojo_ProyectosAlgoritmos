module.exports = () => {
	for (let i = 2016; i > 0; i--) {
		i % 4 === 0
			? console.log(i.toString().replace("0", ""))
			: console.log(i);
	}
}