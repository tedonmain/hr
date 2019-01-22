/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ): 

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:


if (firstName === 'Joe') {
  // do something
}

Starter Code :
*/

// Note: juniper test does not like greetCustomer1, which was more fun
// but greetCustomer passes.
// Why should Juniper tests care? Output is everything. Inside the function
// anything could be there.

var customerData = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};

function greetCustomer1(firstName) {
  let visit =
    customerData[firstName] == undefined ? 0 : customerData[firstName].visits;
  let greeting = visit >= 2 ? 2 : visit;
  let greetings = {
    0: `Welcome! Is this your first time?`,
    1: `Welcome back, ${firstName}! We're glad you liked us the first time!`,
    2: `Welcome back, ${firstName}! So glad to see you again!`
  };

  return greetings[greeting];
}

console.log("1 visit Joe: " + greetCustomer1("Joe"));
console.log("2 visits Carol: " + greetCustomer1("Carol"));
console.log("3 visits Howard: " + greetCustomer1("Howard"));
console.log("4 visits Carrie: " + greetCustomer1("Carrie"));
console.log("0 vists Osbood: " + greetCustomer1("Osgood"));

function greetCustomer(firstName) {
  let visit =
    customerData[firstName] == undefined ? 0 : customerData[firstName].visits;
  let greeting = "";
  if ((visit = 0)) {
    greeting = `Welcome! Is this your first time?`;
  } else if ((visit = 1)) {
    greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  } else {
    greeting = `Welcome back, ${firstName}! So glad to see you again!`;
  }

  return greeting;
}

console.log("2 visits Carol: " + greetCustomer("Carol"));
console.log("3 visits Howard: " + greetCustomer("Howard"));
console.log("4 visits Carrie: " + greetCustomer("Carrie"));
console.log("0 vists Osbood: " + greetCustomer("Osgood"));
