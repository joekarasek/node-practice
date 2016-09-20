const http = require('http');

module.exports = function(url, callback) {
  http.get(url, (response) => {
    callback(response);
  }).on('error', (e) => {
    callback(e);
  });
}
