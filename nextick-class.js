const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {
    constructor() {
        super();

        process.nextTick(()=>{
            this.emit("event");
        });
    }
}

const myEmitter = new MyEmitter();

myEmitter.on("event", ()=>{
    console.log("an event occured!");
});
