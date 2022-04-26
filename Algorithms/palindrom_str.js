console.log(palindrome('madam')); // true
console.log(palindrome('table')); // false
console.log(palindrome('Анна')); // true
console.log(palindrome('А роза упала на лапу Азора')); // true

// метод переворота строки
// function palindrome(str) {
//     //.toLowerCase() - приводит  str к нижнему регистру, .toUpperCase - к верхнему
//     // replace(/\s/g, '') - delete symbol /\s - space, /g - global search, '' - на что меняет ('' - на пустое место)
//     str = str.toLowerCase().replace(/\s/g, '')
//
//     //.split('') - строку в массив,
//     // .reverse() - переворачиваем массив
//     // .join('') - массив в строку
//     return str === str.split('').reverse().join('');
// }

// метод сравнения первого и последнего эл-тов
function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '')
    const len = Math.floor(str.length / 2)
    for (let i=0; i<len; i++)
        if(str[i] !== str[str.length-i-1]){
            return false
        }
    return true
}
