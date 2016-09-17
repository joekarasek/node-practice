// Returns the sum of arguments passed into node

// run
// node sum x y z ...
// to get a sum of x+y+z+...

// note how the process object is used

var total = 0;
for (var i = 2; i < process.argv.length; i++ ) {
  total += +process.argv[i];
}
console.log(total);
