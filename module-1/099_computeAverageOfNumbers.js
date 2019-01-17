/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/

function computeAverageOfNumbers(nums) {
  let total = 0;
  let ret = nums.length == 0 ? 0 : nums.map(m => (total = total + m));
  return ret == 0 ? ret : total / ret.length;
}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
