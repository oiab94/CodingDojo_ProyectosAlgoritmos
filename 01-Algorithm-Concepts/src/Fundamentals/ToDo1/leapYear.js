module.exports.leapYear = (year) => {
	if(year % 400 === 0)
		return "Is a leap year"
	else 
		if((year % 4 === 0) && (year % 100 !== 0))
			return "Is a leap year"
		else
			return "Is not a leap year"
}