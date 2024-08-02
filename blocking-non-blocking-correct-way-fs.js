const fs = require("node:fs");
const filePath = "something.file";

fs.readFile(filePath, (err, data)=>{
    if (err) throw err;

    console.log(data);

    fs.unlink(filePath, unlinkError=>{
        if (unlinkError) throw unlinkError;

        console.log("The file has been successfully deleted.");
    });
});
