const arrNum = [-3, 0, 1, 3, 6, 7, 9, 15]
const k = 5

function twoPoint(arr, num) {
    let result = []
    let left = 0
    let right = arr.length - 1
    let min = left + right // for min difference
    let arrMin = [] // for min difference

    while (left < right) {
        debugger
        let sum = arr[left] + arr[right]
        if (sum === num) return result = [arr[left], arr[right]]
        let minTmp = Math.abs(num - sum) // for min difference
        if (minTmp < min) {
            min = minTmp
            arrMin = [left, right]
        } // for min difference
        if (sum < num) left++
        else right--
    }
    // return [0] // or
    return arrMin // for min difference
}

console.log(twoPoint(arrNum, k))

// если нужной суммы нет и нужно найти ближайшее значение -
// сохраняют результаты сумм и сравнивают, заменяя на нименьшую разницу