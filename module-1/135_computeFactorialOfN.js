/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
*/

function computeFactorialOfN(n) {
  let arr = Array.from({ length: n }, (v, k) => k).reverse();
  let ret = n;
  arr.forEach(a => (a > 0 ? (ret *= a) : undefined));
  return ret;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24
