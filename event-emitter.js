const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end)=>{
    console.log(`Started from ${start} to ${end}`);
});

eventEmitter.emit("start", 1, 100);
