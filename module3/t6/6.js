'use strict';

const button = document.querySelector('button');
button.addEventListener('click', function(evt) {
  console.log(evt);
  alert('Button clicked');
});