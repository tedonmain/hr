/*
Write a function called "computeAreaOfATriangle".
Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
REF: https://www.mathgoodies.com/lessons/vol1/area_triangle
*/

function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}
var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
