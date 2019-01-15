/*
Write a function called "checkAge". 
Given a person's name and age, "checkAge" returns one of two messages:
"Go home, {insert_name_here}!", if they are younger than 21.
"Welcome, {insert_name_here}!", if they are 21 or older.
Naturally, replace "{insert_name_here}" with the given name. :)
var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
*/

// Note: Why do Juniper tests check anything but output?
// What is "inside" a function doesn't matter and to guess and test for it is impossible

// Juniper tests did not accept this
function checkAge1(name, age) {
  let greeting = {
    go: `Go home, ${name}!`,
    stay: `Welcome, ${name}!`
  };
  return age <= 20 ? grereting.go : greeting.stay;
}

var output1 = checkAge1("Adrianna", 22);

console.log(output1); // --> 'Welcome, Adrianna!'

// Juniper tests accpted this
function checkAge(name, age) {
  let bounce = `Go home, ${name}!`;
  let welcome = `Welcome, ${name}!`;
  return age <= 20 ? bounce : welcome;
}

var output = checkAge("Adrian", 22);

console.log(output); // --> 'Welcome, Adrian!'
