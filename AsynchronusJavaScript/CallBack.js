
function first1()
{
    console.log("First")
}
function first()
{
    setTimeout(first1,3000)
}

function second()
{
    console.log("second")
}
first();
second();