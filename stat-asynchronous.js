const fs = require("node:fs");

fs.stat("package.json", (err, stat)=>{
    if (err) throw err;
    
    console.log(`Size: ${stat.size}`);
    console.log(`Directory: ${stat.isDirectory()}`);
    console.log(`File: ${stat.isFile()}`);
    console.log(`SymbolicLink: ${stat.isSymbolicLink()}`);
});
