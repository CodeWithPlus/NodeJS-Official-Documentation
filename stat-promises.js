const fs = require("node:fs/promises");

async function example()
{
    try
    {
        const stat = await fs.stat("package.json");

        console.log(`Size: ${stat.size}`);
        console.log(`Directory: ${stat.isDirectory()}`);
        console.log(`File: ${stat.isFile()}`);
        console.log(`SymbolicLink: ${stat.isSymbolicLink()}`);
    }
    catch (err)
    {
        console.log(err);
    }
}

example();
