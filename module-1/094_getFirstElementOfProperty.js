/*
Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.


var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
*/
var obj = {
  key: [1, 2, 4]
};
function getFirstElementOfProperty(obj, key) {
  //console.log("is array: " + Array.isArray(obj[key]));
  //console.log("the array has elements: " + obj[key].length);
  //console.log("the array's first element: " + obj[key][0]);
  //console.log("the first element has something in it: " + obj[key][0] != undefined);
  let ret = !Array.isArray(obj[key])
    ? undefined
    : !obj[key].length > 0
    ? undefined
    : obj[key][0] == undefined
    ? undefined
    : obj[key][0];
  return ret;
}
var output = getFirstElementOfProperty(obj, "key");
console.log(output); // --> 1
