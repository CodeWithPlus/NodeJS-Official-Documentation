const fs = require("node:fs");

fs.readFile("add.wat", (err, data)=>{
    if (err) throw err;
    console.log(`The data is read. Content: ${data}`);
});

console.log("More Work");
