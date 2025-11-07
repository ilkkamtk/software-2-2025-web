'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;

while (result !== 6) {
  result = rollDice();
  console.log(result);
  document.querySelector('#target').
      insertAdjacentHTML('beforeend', `<li>${result}</li>`);
}

document.querySelector(
    '#danger').insertAdjacentHTML('beforeend', prompt('Hack me'));