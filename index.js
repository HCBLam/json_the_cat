const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

// The second parameter of this function will take fetchBreedDescription as a callback function.
// The callback function itself takes 2 parameters:  one for when error === true; a desc for one error !== true
// So the callback function in the other module needs to set up its callbacks with 2 parameters as well.
// This function will do the console logging, so the callback just has to return the string to be console logged.
// The callback doesn't have to do the console logging anymore; just return the values for use in this function.

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});
