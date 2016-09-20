const http = require('http');

module.exports = function(url, callback) {
  http.get(url, (response) => {
    // callback(response);
    response.on('data', (data) => callback(data.toString()));
  }).on('error', (e) => {
    callback(e);
  });
}
