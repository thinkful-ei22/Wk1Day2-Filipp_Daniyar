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