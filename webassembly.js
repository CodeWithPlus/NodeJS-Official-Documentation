const fs = require("node:fs");

const wasmBuffer = fs.readFileSync("add.wasm");
WebAssembly.instantiate(wasmBuffer).then(wasmModule =>{
    const {add} = wasmModule.instance.exports;
    const sum = add(1, 2);
    console.log(sum);
});
