/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
  let ret = "";
  for (let i = 1; i <= num; i++) {
    ret += string;
  }
  return ret;
}

var output = repeatString("code", 3);
console.log(output); // --> 'codecodecode'

var output = repeatString("code", 0);
console.log(output); // --> ''
