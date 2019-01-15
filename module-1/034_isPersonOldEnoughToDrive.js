/*
Write a function called "isPersonOldEnoughToDrive".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
Notes:
* The legal driving age in the United States is 16.
var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
*/
var obj = {
  age: 16
};

function isPersonOldEnoughToDrive(person) {
  let legalDrivingAge = 16;
  return person.age >= legalDrivingAge;
}

var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true
