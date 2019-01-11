// https://medium.freecodecamp.org/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b

let array1 = Array.from(Array(5), (x, index) => index + 1);

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

let array2 = [Array(5)];
array2[2] = "test";
console.log(array2);
console.log(Object.getOwnPropertyNames(array2));

let array3 = [1, 2, 3, 4, 5];
console.log("array3:" + array3);
let array4 = array3.slice();
console.log(array3 == array4);
array3.pop();
console.log(array3);
console.log(array4);
(() => {
  array3.pop();
  console.log(array3);
  console.log(array4);
})();
