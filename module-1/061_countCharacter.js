/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

function countCharacter(str, char) {
  counter = 0;
  for (c in str) {
    str[c] == char ? counter++ : 0;
  }
  return counter;
}
var output = countCharacter("I am a hacker", "a");
console.log(output); // --> 3
