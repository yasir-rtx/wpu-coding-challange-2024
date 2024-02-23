// 007/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//     let z = [];
//     let result = x;
//     for (let i = 0; i < n; i++) {
//         z.push(result);
//         result += x;
//     }
//     return z;
// }

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

function countBy(x, n) {
    return [...Array(n)].map((el, i) => (i + 1) * x);
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
