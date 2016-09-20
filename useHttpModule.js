const httpModule = require('./httpModule.js');

const url = process.argv[2];

httpModule(url, (response) => {
  console.log(response.body);
});