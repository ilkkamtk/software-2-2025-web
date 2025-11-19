'use strict';

async function getAirport() {                 // asynchronous function is defined by the async keyword
  try {                                               // error handling: try/catch/finally
    const response = await fetch('http://127.0.0.1:3000/airport/EFHK');    // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
    return jsonData;
  } catch (error) {
    console.log(error.message);
  } finally {                                         // finally = this is executed anyway, whether the execution was successful or not
    console.log('asynchronous function complete');
  }
}