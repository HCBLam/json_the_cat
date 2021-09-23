const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const breedObj = JSON.parse(body);

    if (breedObj[0] === undefined) {
      callback(null, 'Breed not found.');
      return;
    }

    if (breedObj[0]) {
      callback(null, breedObj[0]['description']);
    }

    // console.log('type: ', typeof breedObj);
    // console.log('statusCode:', response && response.statusCode + '\n'); // Print the response status code if a response was received

  });
};


module.exports = { fetchBreedDescription };