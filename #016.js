// 016/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks) {
//     return Math.round(marks.reduce((acc, val) => acc + val ,0) / marks.length);
// }

const getAverage = (marks) =>
    Math.floor(marks.reduce((acc, val) => acc + val, 0) / marks.length);

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
