// Requires the filesystem and path modules
const fs = require('fs');
const path = require('path');

// This is a single function module. Therefore, the module.exports is overwritten with the single function.
module.exports = function (dirPath, extensionFilter, callback) {
  fs.readdir(dirPath, function(err, list) {
    if (err) {  return callback(err); }
    list.forEach(function(file) {
      path.extname(file) !== "." + extensionFilter || callback(file);
    });
  });
};
