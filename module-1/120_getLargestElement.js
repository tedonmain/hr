/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/

function getLargestElement(arr) {
  return Array.isArray(arr) && arr.length > 0
    ? arr.reduce((a, b) => (a > b ? a : b))
    : 0;
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
