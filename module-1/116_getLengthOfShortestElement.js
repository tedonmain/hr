/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  let len = 0;
  let ret =
    arr.len == 0
      ? 0
      : arr.forEach(arr =>
          len == 0
            ? (len = arr.length)
            : len > arr.length
            ? (len = arr.length)
            : undefined
        );

  return ret == 0 ? ret : len;
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3
