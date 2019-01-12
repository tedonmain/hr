/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

var arr = [
  [["firstName", "Joe"], ["lastName", "Blow"], ["age", 42], ["role", "clerk"]],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"]
  ]
];

function transformEmployeeData(array) {
  let res = array.map(a => {
    let o = {};
    for (let [key, value] of a) {
      o[key] = value;
    }
    return o;
  });

  return res;
}

(() => {
  let array1 = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    //console.log("array1 length: " + array1.length);
    let o = {};
    for (let j = 0; j < arr[i].length; j++) {
      o[arr[i][j][0]] = arr[i][j][1];
    }
    array1[i] = o;
  }
  console.log(array1);
})();

console.log(transformEmployeeData(arr));
//transformEmployeeData(arr);
