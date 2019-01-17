/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
*/
var obj = {
  key: [1, 2, 3]
};
function getAverageOfElementsAtProperty(obj, key) {
  let total = 0;
  let ret = !Array.isArray(obj[key])
    ? 0
    : obj[key] == undefined
    ? 0
    : obj[key].length == 0
    ? 0
    : obj[key].map(a => (total = total + a));
  return ret == 0 ? ret : total / ret.length;
}
var output = getAverageOfElementsAtProperty(obj, "key");
console.log(output); // --> 2
