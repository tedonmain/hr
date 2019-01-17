/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/
var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  largest = 0;
  let ret = !Array.isArray(obj[key])
    ? undefined
    : obj[key] == undefined
    ? undefined
    : obj[key].length == 0
    ? undefined
    : obj[key].filter(k => (k > largest ? (largest = k) : undefined));
  return largest > 0 ? largest : undefined;
}
var output = getLargestElementAtProperty(obj, "key");
console.log(output); // --> 4
