/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  return arr.length == 0 ||
    !arr.some(e => "0123456789-1-2-3-4-5-6-7-8-9".includes(e))
    ? 0
    : arr.filter(e => !isNaN(e)).reduce((a, b) => (a > b ? a : b));
}

var output = getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]);
console.log(output); // --> 5

var output = getLargestNumberAmongMixedElements([-213]);
console.log(output); // --> 213

var output = getLargestNumberAmongMixedElements([]);
console.log(output); // --> 0

var output = getLargestNumberAmongMixedElements(["word", "bird"]);
console.log(output); // --> 0
