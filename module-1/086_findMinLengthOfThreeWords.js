/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  let arr = [];
  for (arg in arguments) {
    //console.log(arguments[arg].length);
    arr.push(arguments[arg].length);
  }
  return Math.min(...arr);
}

var output = findMinLengthOfThreeWords("a", "be", "see");
console.log(output); // --> 1
