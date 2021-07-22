
const fs = require("fs");
  
const directory_name = "D:\Test";
  
const filenames = fs.readdirSync(directory_name);
  
console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    console.log("File:", file);
});