const reversestring = (s:string[]):void=>
{
    let i = 0
    let j = s.length-1
    while(i <= j)
    {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }
}

let strs = ["h" , "e" , "l" , "l" , "o"]
let result = reversestring(strs)
console.log(result)