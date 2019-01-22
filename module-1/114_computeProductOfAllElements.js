/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
*/

function computeProductOfAllElements(arr) {
  let total = 1;
  let ret =
    arr.length == 0 ? 0 : arr.forEach(element => (total = total * element));
  console.log(ret);
  return ret == 0 ? ret : total;
}
var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
