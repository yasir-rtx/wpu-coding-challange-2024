// 001/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Solution #1
// function grow(x) {
//     let result = x[0];
//     for (let i = 1; i < x.length; i++) result *= x[i];
//     return result;
// }

const grow = (x) => x.reduce((acc, value) => acc * value);

console.log(grow([1, 2, 3]));
