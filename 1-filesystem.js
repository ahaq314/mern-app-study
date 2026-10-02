const fs = require("fs"); 

const fileContent = fs.readFileSync("read.txt", "utf-8"); 
console.log(fileContent); /

const textOut = `This is what I know about Node.js: ${fileContent}.\nCreated on ${new Date().toISOString()}`;
console.log(textOut);

fs.writeFileSync("write.txt", "i am writing some comments into this file"); 
const fileContent2 = fs.readFileSync("write.txt", "utf-8"); 
console.log(fileContent2); 

























// #FINAL NOTES 
const fs = require("fs");
// Import Node.js built-in File System module.

// Read file synchronously
const fileContent = fs.readFileSync("read.txt", "utf-8");
// Reads the file and returns its content as a string.
// Sync = execution waits until the operation finishes.

console.log(fileContent);

// Template literals allow variables/expressions inside ${}
const textOut = `This is what I know about Node.js: ${fileContent}.
Created on ${new Date().toISOString()}`;

console.log(textOut);
// toISOString() gives the current date/time in ISO format.

// Write content to a file synchronously
fs.writeFileSync("write.txt", "I am writing some comments into this file");
// Creates the file if it doesn't exist, or overwrites it if it does.

// Read the newly written file
const fileContent2 = fs.readFileSync("write.txt", "utf-8");

console.log(fileContent2);

// Simple variable
const hello = "Hello, World!";

console.log(hello);
Important things you've learned so far
// 1. require()
// Used to import modules in CommonJS Node.js.

const fs = require("fs");
// 2. fs module
// Allows Node.js to interact with files and directories.
// 3. readFileSync()
// Reads a file synchronously.
// The program waits until the file is completely read.

fs.readFileSync("read.txt", "utf-8");
// 4. writeFileSync()
// Writes data synchronously.
// Existing content is overwritten by default.

fs.writeFileSync("write.txt", "Hello");
// 5. "utf-8"
// Converts the file's raw data into readable text.
// 6. Template literals
// Use backticks ` ` and ${} to insert values.

const name = "John";
const message = `Hello ${name}`;
// 7. Date
// new Date() creates the current date/time object.

new Date().toISOString();
// One important concept you haven't added yet

// Synchronous vs asynchronous file operations

// You are currently using:

fs.readFileSync();
fs.writeFileSync();

// These are synchronous/blocking operations. Node.js also provides asynchronous versions:

fs.readFile("read.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
