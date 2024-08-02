const fs = require("node:fs");

const data = fs.readFileSync("add.wat");
console.log(`The file is read. content: ${data}`);
console.log("More work");
