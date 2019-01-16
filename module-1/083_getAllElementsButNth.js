/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

/*
function getAllElementsButNth(array, n) {
  let ret = [];
  let i = 0;
  for (key in array) {
    key != n ? ((ret[i] = array[key]), i++) : undefined;
  }
  return ret;
}
*/

function getAllElementsButNth(array, n) {
  return array.filter((arr, i) => i !== n);
}

var output = getAllElementsButNth(["a", "b", "c"], 1);
console.log(output); // --> ['a', 'c']
