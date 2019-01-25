/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (""). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {
  longestWord = "";
  arr.forEach(a =>
    longestWord.length == 0 || a.length > longestWord.length
      ? isNaN(a)
        ? (longestWord = a)
        : ""
      : ""
  );
  return longestWord;
}
var output = getLongestWordOfMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 'word'
var output = getLongestWordOfMixedElements([3, 35, 5, 5, 3, 1]);
console.log(output); // --> 'word'
