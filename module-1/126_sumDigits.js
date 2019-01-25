/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  let strNum = num.toString().split("");
  let ret = strNum.reduce((a, b) =>
    a == "-" ? -Number(b) : Number(a) + Number(b)
  );
  return Number(ret);
}
var output = sumDigits(0);
console.log(output); // --> 4
