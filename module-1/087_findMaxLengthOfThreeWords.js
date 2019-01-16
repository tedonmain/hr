/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  let arr = [];
  for (arg in arguments) {
    //console.log(arguments[arg].length);
    arr.push(arguments[arg].length);
  }
  return Math.max(...arr);
}

var output = findMaxLengthOfThreeWords("a", "be", "see");
console.log(output); // --> 3
