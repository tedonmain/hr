/*
Write a function called "getFirstElement".
Given an array, "getFirstElement" returns the first element of the given array.
Notes:
* If the given array has a length of 0, it should return undefined.
var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
*/

function getFirstElement(array) {
  return array.length > 0 ? array[0] : undefined;
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1
