let promise = new Promise((resolve , reject)=>
{
   reject("Resolved")
}).then((value)=>
{
    console.log(value)
}).finally(()=>
{
    console.log("hello")
})