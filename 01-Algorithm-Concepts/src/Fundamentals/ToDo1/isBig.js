module.exports.isBig = () => {
	let values = 0;

	// * Formula de sumatoria = [n(n + 1)]/2
	/**
	 * 1 a 300000 => [300000(300000 + 1)] / 2 = 45000150000
	 * Como -300000 a -1 es lo mismo que -(1 a 300000) entonces
	 * el resultado sería el mismo que 1 a 300000 solo que con 
	 * el signo cambiado es decir -45000150000
	 * Por lo tanto el resultado es 0
	 */

	return 0;
}