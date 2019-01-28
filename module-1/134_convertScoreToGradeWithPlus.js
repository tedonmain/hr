/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
  let grade = {
    A: [90],
    B: [80],
    C: [70],
    D: [60],
    F: [0]
  };
  if (score > 100 || score < 0) return "INVALID SCORE";
  for (letter in grade) {
    if (score >= grade[letter][0]) {
      let letterGrade = letter;
      if (letterGrade == "F") return letterGrade;
      letterGrade =
        score <= grade[letter][0] + 2
          ? (letterGrade += "-")
          : score >= grade[letter][0] + 8
          ? (letterGrade += "+")
          : letterGrade;
      return letterGrade;
    }
  }
}
var output = convertScoreToGradeWithPlusAndMinus(90);
console.log(output); // --> 'A-'

var output = convertScoreToGradeWithPlusAndMinus(88);
console.log(output); // --> 'B+'

var output = convertScoreToGradeWithPlusAndMinus(75);
console.log(output); // --> 'C'

var output = convertScoreToGradeWithPlusAndMinus(40);
console.log(output); // --> 'F'
