let count = 0;

const intervalId = setInterval(()=>{
    count++;
    console.log(`${count} and will stop at count 10.`);

    if (count >= 10)
    {
        clearInterval(intervalId);   
    }
});
