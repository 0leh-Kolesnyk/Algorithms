function sortAscending(a, b) {
	return a - b // по возрастанию
}

function sortDescending(a, b) {
	return b - a // по убыванию
}

const array = [
	33, 15, 51, 65, 93, 83, 79,
	10, 36, 54, 91, 82, 60, 32,
	0, 35, 11, 94, 80, 38
]


var createCopyArrayAndSort = function (array) {
	let arrayCopy = array.slice()
	arrayCopy.sort(sortAscending) // по возрастанию
	
	console.log('array = ', array)
	console.log('arrayCopy = ', arrayCopy)
}

createCopyArrayAndSort(array)