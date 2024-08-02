function apiCall(arg, callback)
{
    if (typeof arg !== "string")
        return process.nextTick(callback, new TypeError("The argument must be a string"));

    callback();
}

apiCall(232, (err)=>{
    if (err) throw err;

    console.log("The function execution is successful.");
});
