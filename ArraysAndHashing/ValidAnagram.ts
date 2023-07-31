function isValidAnagram(s:string , t:string):boolean
{
    return s.split("").sort().join() === t.split("").sort().join();
}

const isTrue = isValidAnagram("rat" , "car");
console.log(isTrue)