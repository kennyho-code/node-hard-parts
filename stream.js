// Node.js program to demonstrate the
// fs.createReadStream() method

// Include fs module
let fs = require("fs"),
  // Use fs.createReadStream() method
  // to read the file
  reader = fs.createReadStream("input.txt");

// Read and display the file data on console
reader.on("data", function (chunk) {
  console.log(chunk.toString());
})