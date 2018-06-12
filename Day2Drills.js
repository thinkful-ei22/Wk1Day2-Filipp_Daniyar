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

let array = [0, 4, 6, 8, 9, 10];

console.log(max(array));
console.log(max([]));

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
//   // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Create a function called filter, which takes two arguments:
// an array and a function
function filter(arr, fn) {
  //create a newArray initialized to[];
  let newArray = [];

  //start a loop through the arr
  for (let i = 0; i < arr.length; i++) {
    //check if invoking fn while passing in the current arr element returns true
    if (fn(arr[i]) === true) {
      //push the element into newArray
      newArray.push(arr[i]);
    }
  }
  //return newArray
  return newArray;
}

console.log(filter(myNames, function (name) {
  return name[0] === 'R';
}));

//Invoking the filter function and immediately logging the result using a single line of code and arrow functions
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

//Array with turtles moves
let moves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

//Filter out items where the turtle moves backwards or to the right(i.e.where either the first of second number is an item that is negative).
let filteredMoves = moves.filter(arr => {
  if (arr[0] >= 0 && arr[1] >= 0) { return arr;}
});

//Create a new array containing how many steps the turtle makes in total with each movement(i.e.the first and second number added together)
let totalStepsMap = moves.map(move => Math.abs(move[0]) + Math.abs(move [1]));

//Log out how many steps the turtle took in each case.
let totalStepsforEach = totalStepsMap.forEach(num => console.log(num));

console.log(filteredMoves);
console.log(totalStepsMap);



// reduce

let string = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

//Convert string to an array
let stringArray = string.split(' ');


let decodedMessage = stringArray.reduce(function(initialValue, word) {
  //If array element is exactly three chars in length, 
  //add a space character to accumulator
  if (word.length === 3) {
    return initialValue + ' ';
  }
  //Otherwise, capitalize the LAST char of array element 
  //and add it to accumulator
  else {
    return initialValue + word.toUpperCase().slice(-1);
  }
  //set initialValue to empty string
}, '');

console.log(decodedMessage);