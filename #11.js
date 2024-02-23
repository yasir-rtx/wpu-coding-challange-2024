// 011/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!";
//     } else if (
//         (p1 === "rock" && p2 === "scissors") ||
//         (p1 === "scissors" && p2 === "paper") ||
//         (p1 === "paper" && p2 === "rock")
//     ) {
//         return "Player 1 won!";
//     } else if (
//         (p1 === "scissors" && p2 === "rock") ||
//         (p1 === "paper" && p2 === "scissors") ||
//         (p1 === "rock" && p2 === "paper")
//     ) {
//         return "Player 2 won!";
//     }
// };

const rps = (p1, p2) =>
    p1 === p2
        ? "Draw!"
        : (p1 === "rock" && p2 === "scissors") ||
          (p1 === "scissors" && p2 === "paper") ||
          (p1 === "paper" && p2 === "rock")
        ? "Player 1 won!"
        : "Player 2 won!";

console.log(rps("scissors", "rock"));
