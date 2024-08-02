const fs = require("node:fs");

try {
    const stat = fs.statSync("package.json");

    console.log(`Size: ${stat.size}`);
    console.log(`Directory: ${stat.isDirectory()}`);
    console.log(`File: ${stat.isFile()}`);
    console.log(`SymbolicLink: ${stat.isSymbolicLink()}`);
}
catch (err) {
    console.log(err);
}
