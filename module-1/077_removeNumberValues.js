/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/
var obj = {
  a: 2,
  b: "remaining",
  c: 4
};

function removeNumberValues(obj) {
  for (key in obj) {
    isNaN(obj[key]) ? "" : delete obj[key];
  }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
