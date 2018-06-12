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