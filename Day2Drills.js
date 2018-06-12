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

console.log(filteredNames); // => ['Rich', 'Ray']
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

//Functions as return values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
    else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado coming up');
const floodWarning = hazardWarningCreator('Flood incoming');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

tornadoWarning('Mainview Beach');
tornadoWarning('Washington Coast');

floodWarning('Your neighborhood');
floodWarning('Across the city');

//forEach, filter and map

// A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the array represents the number of steps the turtle takes forwards. The second number in the array is the number of steps the turtle takes to the left.
// Here is an array of different movements made by a turtle: [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].
// Use the filter method to remove any items where the turtle moves backwards or to the right(i.e.where either the first of second number is an item that is negative).
// Use the map method to create a new array containing how many steps the turtle makes in total with each movement(i.e.the first and second number added together).
// Use the forEach method to log out how many steps the turtle took in each case.

let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filteredMoves = moves.filter(arr => {
  if (arr[0] >= 0 && arr[1] >= 0) { return arr;}
});

let totalStepsMap = moves.map(move => Math.abs(move[0]) + Math.abs(move [1]));

let totalStepsforEach = totalStepsMap.forEach(num => console.log(num));

console.log(filteredMoves);
console.log(totalStepsMap);


// reduce

/*Use the reduce function to iterate through an array of words and construct a decoded sentence (string) based on the following criteria:
If the array element is exactly three characters in length, add a space character to your accumulator
Otherwise, capitalize the LAST character of the array element and add it to your accumulator
Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
You will need to convert the input to an array before using .reduce()
HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty string so that future iterations can concatenate more string characters */

let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let stringArray = string.split(' ');


let decodedMessage = stringArray.reduce(function(initialValue, word) {
  if (word.length === 3) {
    return initialValue + ' ';
  }
  else {
    return initialValue + word.toUpperCase().slice(-1);
  }
}, '');

console.log(decodedMessage);


