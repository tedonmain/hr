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
