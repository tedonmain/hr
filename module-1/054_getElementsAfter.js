/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/

function getElementsAfter_v1(array, n) {
  let arr = [];
  for (i = n + 1; i <= array.length - 1 && i > -1; i++) {
    arr.push(array[i]);
  }
  return arr;
}

function getElementsAfter(array, n) {
  let arr = [];
  for (key in array) {
    key > n ? arr.push(array[key]) : "";
  }
  return arr;
}

const output = getElementsAfter(["a", "b", "c", "d", "e"], 2);
const output0 = getElementsAfter(
  [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ],
  4
);
const output1 = getElementsAfter([7, 8, 9], 2);
const output2 = getElementsAfter(["a", "b", "c", "d", "e"], 8);

console.log(output); // --> ['d', 'e']
console.log(output0); // --> [undefined, undefined, undefined, undefined, undefined]
console.log(output1); // --> [8, 9]
console.log(output2); //
