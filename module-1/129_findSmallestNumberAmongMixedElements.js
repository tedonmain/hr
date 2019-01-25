/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

should return a number
should return the smallest element in an array
should return the smallest element in an array when there are ties
should return the smallest element in an array when they are all negative
should return 0 when the array is empty
should return 0 when there are no numbers

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  if (
    arr.length == 0 ||
    !arr.some(e => "0123456789-1-2-3-4-5-6-7-8-9".includes(e))
  )
    return 0;
  let ret = arr.filter(e => !isNaN(e));
  return ret.reduce((a, b) => (a < b ? a : b));
}

var output = findSmallestNumberAmongMixedElements([
  4,
  "lincoln",
  9,
  "octopus",
  -17
]);

console.log(output); // --> 4
console.log(findSmallestNumberAmongMixedElements([-1, -2, -3, "books"]));
