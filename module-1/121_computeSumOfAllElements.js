/* 
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
*/

function computeSumOfAllElements(arr) {
  return Array.isArray(arr) && arr.length > 0 ? arr.reduce((a, b) => a + b) : 0;
}

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
