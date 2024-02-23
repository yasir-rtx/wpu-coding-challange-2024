// 001/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = (n) => {
//     const arr = [];
//     for (let i = n; i > 0; i--) arr.push(i);
//     return arr;
// };

const reverseSeq = (n) =>
    [...Array(n)].map((elemen, index) => index + 1).reverse();

console.log(reverseSeq(5));
