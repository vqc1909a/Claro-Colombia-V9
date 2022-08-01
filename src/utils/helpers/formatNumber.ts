export const separateThousands = (number: number | string) => {
	const numberString = number.toString();
	const indexDecimal = numberString.indexOf(".");

	let numberStringInteger = "";
	let numberStringDecimal = "";

	if (indexDecimal !== -1) {
		numberStringInteger = numberString.slice(0, indexDecimal);
		numberStringDecimal = numberString.slice(indexDecimal);
	}

	const arrayNumberString = numberStringInteger
		? numberStringInteger.split("")
		: numberString.split("");

	const amount = arrayNumberString.length;
	for (let i = 0; i < Math.floor((amount - 1) / 3); i++) {
		arrayNumberString.splice(amount - (i + 1) * 3, 0, ".");
	}
	const formattedNumber = arrayNumberString.join("");
	return numberStringInteger
		? formattedNumber.concat(numberStringDecimal)
		: formattedNumber;
};
