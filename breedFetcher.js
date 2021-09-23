const request = require('request');

// build a command line app that allows users to query TheCatAPI dataset from the terminal
// users provide a breed name
// application will fetch the info from the API and print out a short description of that breed


const args = process.argv.splice(2);
const breed = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  if (error) {
    console.log('error: ' + error); // Print the error if one occurred
    return;
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log('Sorry.  Breed not found.');
    return;
  }

  console.log('type: ', typeof data);
  console.log('statusCode:', response && response.statusCode +'\n'); // Print the response status code if a response was received
  console.log(data[0]['description']);

});


