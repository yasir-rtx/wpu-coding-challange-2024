// 012/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// function arrayPlusArray(arr1, arr2) {
//     let sum1 = arr1.reduce(
//         (accumulator, currentValue) => accumulator + currentValue
//     );
//     let sum2 = arr2.reduce(
//         (accumulator, currentValue) => accumulator + currentValue
//     );
//     return sum1 + sum2; //something went wrong
// }

// function arrayPlusArray(arr1, arr2) {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         for (let j = 0; j < arguments[i].length; j++) {
//             result += arguments[i][j];
//         }
//     }
//     return result;
// }

const arrayPlusArray = (arr1, arr2) =>
    [...arr1, ...arr2].reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
