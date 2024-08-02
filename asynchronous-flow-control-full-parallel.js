let count = 0;
let success = 0;
const failed = [];
const recipients = [
    { name: 'Bart', email: 'bart@tld' },
    { name: 'Marge', email: 'marge@tld' },
    { name: 'Homer', email: 'homer@tld' },
    { name: 'Lisa', email: 'lisa@tld' },
    { name: 'Maggie', email: 'maggie@tld' },
  ];

function sendMail(data, callback)
{
    console.log(`-------------- ${data.email} --------------`);
    console.log(`Subject: ${data.subject}`);
    console.log(`Message: ${data.message}`);
    console.log(`-------------- ${data.email} --------------`);

    callback(false);
}

function dispatch(recipient, callback)
{
    sendMail({
        subject: "Dinner tonight",
        message: `${recipient.name}, we have lot of cabbage on the plate. You coming?`,
        email: recipient.email
    }, callback);
}

function final(count, success, failed)
{
    console.log(`Result: ${count} attempts & ${success} succeeded emails.`);

    if (failed.length)
    {
        console.log(`The follwing are failed to sent:\n${failed.join("\n")}\n`);   
    }
}

recipients.forEach((recipient) => {
    dispatch(recipient, (err) =>{
        if (!err)
        {
            success += 1;
        }
        else 
        {
            failed.push(recipient.name);
        }

        count += 1;

        if (count === recipients.length)
        {
            final(count, success, failed);   
        }
    });
});
