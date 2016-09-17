// This program uses a custom module (filterFileModule.js) to print a list of files in a given directory,
// filtered by the extension of the files. The first argument is the
// directory name and the second argument is the extension filter. Print the
// list of files (one file per line) to the console.
//
// The module file does most of the work. The module
// exports a single function that takes three arguments: the directory name,
// the filename extension string and a callback function, in that order. The
// filename extension argument must be the same as what was passed to your
// program. Don't turn it into a RegExp or prefix with "." or do anything
// except pass it to your module where you can do what you need to make your
// filter work.
//
// The callback function must be called using the idiomatic node(err, data)
// convention. This convention stipulates that unless there's an error, the
// first argument passed to the callback will be null, and the second will be
// your data. In this exercise, the data will be your filtered list of files,
// as an Array. If you receive an error, e.g. from your call to
// fs.readdir(), the callback must be called with the error, and only the
// error, as the first argument.
//
// You must not print directly to the console from your module file, only
// from your original program.
//
// In the case of an error bubbling up to your original program file, simply
// check for it and print an informative message to the console.
//
// These four things are the contract that your module must follow.
//
//  » Export a single function that takes exactly the arguments described.
//  » Call the callback exactly once with an error or some data as described.
//  » Don't change anything else, like global variables or stdout.
//  » Handle all the errors that may occur and pass them to the callback.
//
// The benefit of having a contract is that your module can be used by anyone
// who expects this contract. So your module could be used by anyone else who
// does learnyounode, or the verifier, and just work.


// Require the filesystem module and grab the filePath (first argument passed in)
const filter = require('./filterFileModule.js')

// Stores the two arguements passed in by the user
const dirPath = process.argv[2];
const extensionFilter = process.argv[3];

function logResults(output) {
  console.log(output);
}
// Logs a list of files with the matching file extension
filter(dirPath, extensionFilter, logResults);
