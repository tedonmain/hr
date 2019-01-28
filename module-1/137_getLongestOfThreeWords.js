/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  let retWord = "";
  for (a in arguments) {
    arguments[a].length > retWord.length ? (retWord = arguments[a]) : undefined;
  }
  return retWord;
}

var output = getLongestOfThreeWords("these", "three", "words");
console.log(output); // --> 'these'
