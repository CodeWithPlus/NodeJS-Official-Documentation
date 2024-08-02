const fs = require("node:fs");
const filename = "add.wat";

fs.readFile(filename, (err, data)=>{
    setTimeout(()=>{
        console.log("Timeout");
    }, 0);

    setImmediate(()=>{
        console.log("Immediate");   
    })
});
