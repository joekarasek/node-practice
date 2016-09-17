// This program uses a single synchronous filesystem operation to
// read a file and print the number of newlines (\n) it contains to the
// console (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the first
// command-line argument (i.e., process.argv[2]). You do not need to make
// your own test file.

// Require the filesystem module and grab the filePath (first argument passed in)
const fs = require('fs');
const filePath = process.argv[2];


const newLineCount = fs.readFileSync(filePath)  // returns a buffer object
                       .toString()              // turns it into a string of ascii characters
                       .split('\n')             // splits it into an array by line return
                       .length - 1;             // and returns the length of the array (minus one to get the number of new lines in the document)

// Returns the new line count to the terminal
console.log(newLineCount);
