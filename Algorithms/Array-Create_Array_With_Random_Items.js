const min = 0
const max = 100
const amountOfElements = 10

console.log(createArrayWithRandomItems(0, 100, 20))

function createArrayWithRandomItems(min, max, count) {
	let array = []
	for (let i = 0; i<count; i++){
		array[i] = getRandomIntInclusive(min, max)
	}
		return array
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}