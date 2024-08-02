let successCount = 0;
const recipients = [
    { name: 'Bart', email: 'bart@tld' },
    { name: 'Marge', email: 'marge@tld' },
    { name: 'Homer', email: 'homer@tld' },
    { name: 'Lisa', email: 'lisa@tld' },
    { name: 'Maggie', email: 'maggie@tld' },
    { name: '1', email: '1@tld' },
    { name: '2', email: '2@tld' },
    { name: '3', email: '3@tld' },
    { name: '4', email: '4@tld' },
    { name: '5', email: '5@tld' },
    { name: '6', email: '6@tld' },
    { name: '7', email: '7@tld' },
    { name: '8', email: '8@tld' },
    { name: '9', email: '9@tld' },
    { name: '10', email: '10@tld' },
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

function final()
{
    console.log(`dispatched ${successCount} emails.`);
    console.log("The parallel execution is finished.");
}

function sendTenEmailsOnly()
{
    function serial(recepient)
    {
        if (!recepient || successCount >= 10) return final();

        dispatch(recepient, (err) => {
            if (!err) successCount++;

            serial(recipients.pop());
        })
    }

    serial(recipients.pop());
}

// pop will start the sending from last element and shift from first element.
sendTenEmailsOnly();
