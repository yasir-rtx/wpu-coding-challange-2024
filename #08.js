// 008/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// const countSheep = function (num) {
//     let words = "";
//     for (let i = 1; i <= num; i++) {
//         words += `${i} sheep...`;
//     }
//     return words;
// };

// const countSheep = (num) =>
//     [...Array(num)].map((el, i) => `${i + 1} sheep...`).join("");

const countSheep = (num) =>
    Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
