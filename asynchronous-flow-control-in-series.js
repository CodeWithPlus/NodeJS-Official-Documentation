function func1(arg, callback)
{
    console.log(`I am called with '${arg}'`);
    callback(arg);
}

function func2(arg, callback)
{
    console.log(`I am called with '${arg}'`);
    callback(arg);
}

function func3(arg, callback)
{
    console.log(`I am called with '${arg}'`);
    callback(arg);
}

const operations = [
    { func: func1,  args: 1 },
    { func: func2,  args: 2 },
    { func: func3,  args: 3 }
]

function executeFunctionWithArgs(operation, callback)
{
    const {args, func} = operation;
    func(args, callback);
}

function serialProcedure(operation)
{
    if (!operation) process.exit(0);

    executeFunctionWithArgs(operation, (result)=>{
        serialProcedure(operations.shift());
    });
}

serialProcedure(operations.shift());
