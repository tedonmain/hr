/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. 
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:
*/
let a = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(array) {
  let o = {};
  for (i = 0; i < array.length; i++) {
    o[array[i][0]] = array[i][1];
  }

  return o;
}

console.log(fromListToObject(a));
