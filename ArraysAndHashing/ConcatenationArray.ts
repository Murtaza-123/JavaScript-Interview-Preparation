const getConcatenation = (nums:number[]) =>
{
    return [...nums , nums]
}

let array = [1,2,1]
let result = getConcatenation(array)
console.log(result)