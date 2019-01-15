/*
Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
*/
var obj = {
  a: 8,
  b: 2,
  c: "montana"
};
function removeNumbersLargerThan(num, obj) {
  for (key in obj) {
    obj[key] > num && !isNaN(obj[key]) ? delete obj[key] : "";
  }
  return obj;
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
