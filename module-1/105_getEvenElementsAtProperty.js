/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/
var obj = {
  key: [1000, 11, 50, 17]
};
function getEvenElementsAtProperty(obj, key) {
  return !Array.isArray(obj[key])
    ? []
    : obj[key] == undefined
    ? []
    : obj[key].length == 0
    ? []
    : obj[key].filter(elem => elem % 2 == 0);
}
var output = getEvenElementsAtProperty(obj, "key");
console.log(output); // --> [1000, 50]
