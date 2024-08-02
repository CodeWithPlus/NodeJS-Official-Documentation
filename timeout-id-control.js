const id = setTimeout(()=>{
    console.log("This will be not printed.");
}, 2000);

clearTimeout(id);
