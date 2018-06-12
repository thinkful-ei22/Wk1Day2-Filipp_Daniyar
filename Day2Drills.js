'use strict';

//max and min

function max(numbers) {
  let currentMax = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}


let array = [0, 4, 6, 8, 9, 10];

console.log(max(array));
console.log(max([]));

function min(numbers) {
  let currentMin = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

console.log(min(array));
console.log(min([]));

//forEach

function average (numbers) {
  let sum = 0;
  numbers.forEach(function(num){
    sum+=num;
  });
  return sum / numbers.length;
}

console.log(average(array));

//Functions as arguments(1)

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));

//Functions as arguments(2)

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function (name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:

// Create a function called filter, which takes two arguments:
// First argument is an array: arr
// Second argument is a function: fn
// This function exists to return a new array, so create a newArray initialized to[];
// Now start a loop through the arr passed in
//   Inside the loop:
// Write an if statement that checks if invoking the fn function while passing in the current element of arr returns true
// If it does, then push the current element of arr into our newArray
// Finally, outside the loop, we return newArray
// Try calling your filter function using the myNames array above and test that it works



function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(filter(myNames, function (name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
}));

//Can you invoke the filter function and immediately log the result using a single line of code and arrow functions?
console.log(filter(myNames, name => name[0] === 'R'));