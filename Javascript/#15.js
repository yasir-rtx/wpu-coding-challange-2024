// 015/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//     return array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((accumulator, currentValue)=>accumulator+currentValue,0);
// }

const sumArray = (array) =>
    array == null || array.length <= 2
        ? 0
        : array
              .sort((a, b) => a - b)
              .slice(1, -1)
              .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
              );

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
