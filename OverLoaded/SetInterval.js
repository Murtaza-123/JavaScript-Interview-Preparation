var timeOut = setInterval(()=>console.log("hello"),1000)
setTimeout(()=>
{
    clearInterval(timeOut);
    console.log("stop")
},5000)