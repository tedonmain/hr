/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

var output = modulo(25, 4);
console.log(output); // --> 1
*/

function modulo(num1, num2) {
  if (isNaN(num1)) return NaN;
  if (isNaN(num2)) return NaN;
  if (num1 == 0) return 0;
  if (num2 == 0) return NaN;
  let sign = num1 * num2 < 0 ? -1 : 1;
  let ret = num1 / num2;
  let retToString = ret.toString();
  // could do Number.isInteger(ret);
  let retMod = !retToString.includes(".")
    ? 0
    : Math.fround(
        (100 *
          Number(retToString.slice(retToString.indexOf("."))) *
          num2 *
          sign) /
          100
      );

  console.log("retMod : " + retMod);
  console.log("mod    : " + (num1 % num2));

  return Number(retMod);
}

console.log("--------- NEW -------- ");

var output = modulo(5.5, 2);
var output = modulo(-5.5, 2);
var output = modulo(25, 4);
var output = modulo(-55, 3);
var output = modulo(55, -3);

//
var output = modulo(-4, 2);
var output = modulo(12, 5);

//console.log(output); // --> 1
/* // this is passing all the tests but above should work instead
  if (num1 == 0) return 0;
  if (num2 == 0) return NaN;
  if (num2 == NaN) return num2;
  if (num1 == NaN) return num1;
  let sign = num1 * num2 < 0 ? -1 : 1;
  let ret = num1 / num2;
  let retToString = ret.toString();
  let retMod = !retToString.includes(".")
    ? 0
    : Number(retToString.slice(retToString.indexOf("."))) * (num2 * sign);
  return retMod;
*/
