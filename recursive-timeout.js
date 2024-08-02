let count = 0;

function printSomething()
{
    console.log("I am able to print something.");

    if (count++ < 10) setTimeout(printSomething, 1000);
}

setTimeout(printSomething, 1000);
