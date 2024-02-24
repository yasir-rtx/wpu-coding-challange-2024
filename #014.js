// 014/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// function getGrade(s1, s2, s3) {
//     let avg = (s1 + s2 + s3) / 3;
//     const grade = (avg >= 90) ? 'A' : (avg >= 80) ? 'B' : (avg >= 70) ? 'C' : (avg >= 60) ? 'D' : 'F';
//     return grade;
// }

const getGrade = (...s) => {
    const score =
        s.reduce((accumulator, currentValue) => accumulator + currentValue) /
        s.length;
    return (grade =
        score >= 90
            ? "A"
            : score >= 80
            ? "B"
            : score >= 70
            ? "C"
            : score >= 60
            ? "D"
            : "F");
};

console.log(getGrade(95, 90, 93));
