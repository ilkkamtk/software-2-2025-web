'use strict';

function quadraticSum(first, second) {
  const result = first * first + second * second;
  return result;
}

const num1 = prompt('Enter 1. number.');
const num2 = prompt('Enter 2. number.');
const quad = quadraticSum(num1, num2);
console.log('The quadratic sum of ' + num1 + ' and ' + num2 + ' is ' + quad);