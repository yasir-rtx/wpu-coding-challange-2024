// 013/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//     let result = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) result += 3;
//         if (games[i][0] == games[i][2]) result += 1;
//     }
//     return result;
// }

const points = (games) =>
    games.reduce(
        (accumulator, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + accumulator,
        0
    );

console.log(
    points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
    ])
);
console.log(
    points([
        "1:1",
        "2:2",
        "3:3",
        "4:4",
        "2:2",
        "3:3",
        "4:4",
        "3:3",
        "4:4",
        "4:4",
    ])
);
console.log(
    points([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
    ])
);
console.log(
    points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
    ])
);
console.log(
    points([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
    ])
);
