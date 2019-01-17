/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
*/
var obj = {
  key: [2, 1, 5, 6, 66, 3, 18]
};
function getSmallestElementAtProperty(obj, key) {
  let smallest = 0;
  let ret = !Array.isArray(obj[key])
    ? undefined
    : obj[key] == undefined
    ? undefined
    : obj[key].length == 0
    ? undefined
    : obj[key].map(k =>
        smallest == 0
          ? (smallest = k)
          : k < smallest
          ? (smallest = k)
          : undefined
      );
  return smallest == 0 ? undefined : smallest;
}
var output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1
