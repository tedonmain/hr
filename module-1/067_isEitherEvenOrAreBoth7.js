/*
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
*/

function isEitherEvenOrAreBoth7(num1, num2) {
  let ret;
  ret =
    num1 == num2 && num1 == 7
      ? true
      : num1 % 2 == 0 || num2 % 2 == 0
      ? true
      : false;
  return ret;
}

var output = isEitherEvenOrAreBoth7(7, 7);
console.log(output); // true

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true

var output = isEitherEvenOrAreBoth7(1, 8);
console.log(output); // --> true
