function final(someInput, callback) 
{
    callback(`${someInput} and terminated by executing callback.`);
}

function middleware(someInput, callback) 
{
    return final(`${someInput}, touched by middleware`, callback);
}

function initiate()
{
    const someInput = "Hello, this is a function";

    middleware(someInput, (result)=>{
        console.log(result);
    });
}

initiate();
