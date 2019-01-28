/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  let op = num1 > 0 && num2 > 0 ? "+" : num1 < 0 && num2 < 0 ? "+" : "-";
  let product = 0;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  for (let i = 0; i < num2; i++) {
    op == "+" ? (product = product + num1) : (product = product - num1);
  }
  return product;
}

var output = multiply(4, -7);
console.log(output); // --> 28
