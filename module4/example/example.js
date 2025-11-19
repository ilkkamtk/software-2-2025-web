'use strict';

const searchForm = document.querySelector('#search-form');
const target = document.querySelector('#target');

async function getAirport(icao) {                 // asynchronous function is defined by the async keyword
  const response = await fetch('http://127.0.0.1:3000/airport/' + icao);    // starting data download, fetch returns a promise which contains an object of type 'response'
  const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
  if (!response.ok) {
    throw new Error(jsonData.message);
  }
  return jsonData;
}

searchForm.addEventListener('submit', async function(evt) {
  try {
    evt.preventDefault();
    const icao = document.querySelector('input[name=icao]').value;
    const airport = await getAirport(icao);
    console.log(airport);
    target.innerText = `Name: ${airport.name}, type: ${airport.type}`;
  } catch (error) {
    alert(error.message);
  }
});