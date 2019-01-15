/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
*/

function getAllElementsButLast(array) {
  let arr = [];
  for (key in array) {
    key < array.length - 1 ? arr.push(array[key]) : "";
  }
  return arr;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
