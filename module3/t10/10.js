'use strict';

const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const formData = new FormData(form);
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  target.innerText = `Your name is ${firstname} ${lastname}`;

  // const queryString = `firstname=${firstname}&lastname=${lastname}`;

  // const queryString = new URLSearchParams(formData).toString();
  // console.log(queryString);

});

