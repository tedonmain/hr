/*
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
*/

function convertScoreToGrade(score) {
  let grade = {
    A: [90, 100],
    B: [80, 89],
    C: [70, 79],
    D: [60, 69],
    F: [0, 59]
  };
  if (score > 100 || score < 0) return "INVALID SCORE";
  for (letter in grade) {
    if (score >= grade[letter][0]) return letter;
  }
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

var output = convertScoreToGrade(80);
console.log(output); // --> 'B'

var output = convertScoreToGrade(79);
console.log(output); // --> 'C'

var output = convertScoreToGrade(60);
console.log(output); // --> 'D'

var output = convertScoreToGrade(59);
console.log(output); // --> 'F'
