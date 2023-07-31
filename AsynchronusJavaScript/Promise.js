var myPromise = new Promise((resolve , reject)=>
{
    let a = false;
    setTimeout(()=>
    {
        return (a)? resolve("resolved"): reject ("a is not found")
    },2000);
}).then((value)=>
{
    console.log(value)
}).catch((err)=>
{
    console.log(err)
})