// This program prints a list of files in a given directory,
// filtered by the extension of the files (using async I/O). You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and a
// file extension to filter by as the second argument.
//
// For example, if you get 'txt' as the second argument then you will need to
// filter the list to only files that end with .txt. Note that the second
// argument will not come prefixed with a '.'.
//
// The list of files print to the console, one file per line.



// Require the filesystem module and grab the filePath (first argument passed in)
const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extensionFilter = "." + process.argv[3];

const results = [];

function filterByExtension(dirPath, extensionFilter, callback) {
  fs.readdir(dirPath, function(err, list) {

    // This is my first solution before I discovered the path module
    // files.forEach(function(file) {
    //   file.indexOf(extensionFilter) == -1 || results.push(file);
    // });

    list.forEach(function(file) {
      path.extname(file) !== extensionFilter || results.push(file);
    });

    callback();

  });
};

function logResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

// Logs a list of files with the matching file extension
filterByExtension(dirPath, extensionFilter, logResults);
