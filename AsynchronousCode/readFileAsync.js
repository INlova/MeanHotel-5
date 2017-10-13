var fs = require('fs');

console.log("Going to get a file");

// fs.readFile('readFileSync.js', function(err, file) {
//     console.log("Got the file");
// });
var onFileLoad = function(err, file){
  console.log("Got the file");  
};

fs.readFile('readFileSync.js', onFileLoad);


console.log("App continues...");