'use strict';

const name = prompt('Please enter name');

const greeting = `Hello, ${name}!!!!!`;

// console.log(greeting);

document.querySelector('#target').innerHTML = greeting;
