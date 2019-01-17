/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
  let maxLen = 0;
  let ret = arr.map(elem =>
    elem.length > maxLen ? (maxLen = elem.length) : undefined
  );
  return maxLen;
}

var output = getLengthOfLongestElement(["one", "two", "three"]);
console.log(output); // --> 5
