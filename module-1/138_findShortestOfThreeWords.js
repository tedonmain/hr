/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  let retWord = "";
  for (a in arguments) {
    retWord.length == 0 || arguments[a].length < retWord.length
      ? (retWord = arguments[a])
      : undefined;
  }
  return retWord;
}
var output = findShortestOfOfThreeWords("a", "two", "three");
console.log(output); // --> 'a'
