/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
  let obj = {};
  if (str.length == 0) {
    return obj;
  }
  let arr = str.split(" ");
  for (word in arr) {
    obj[arr[word]] = obj[arr[word]] == undefined ? 1 : obj[arr[word]] + 1;
  }
  return obj;
}

var output = countWords("ask a bunch get a bunch");
//var output = countWords("");
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
