function asyncAvg(n, avgCB)
{
    let sum = 0;

    function help(i, cb)
    {
        sum += i;

        if (i == n)
        {
            cb(sum);
            return;
        }

        setImmediate(help.bind(null, i + 1, cb));
    }

    help(1, (sum)=>{
        const avg = sum / n;
        avgCB(avg);
    });
}

asyncAvg(10, (avg)=>{
    console.log(`Average: ${avg}`);
});
