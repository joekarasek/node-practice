// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument.

// Require the filesystem module and grab the filePath (first argument passed in)
const fs = require('fs');
const filePath = process.argv[2];

// This function reads a file asynchronously and uses a callback to return the number of new lines in the document
function asycnNewLineCount(filePath, callback) {
  fs.readFile(filePath, function(err, fileBuffer) {
    if (err) {
      return callback(err)
    };
    newLineCount =  fileBuffer.toString().split('\n').length - 1;
    return callback(newLineCount);
  });
};

function logLineCount(result) {
  console.log(result);
}

// Returns the new line count to the terminal
asycnNewLineCount(filePath, logLineCount);
