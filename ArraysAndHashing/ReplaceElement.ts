const replaceElement = (nums:number[]):number[] =>
{
    for(let i = 0; i < nums.length; i++)
    {
        let max = 0
        for(let j = i+1; j < nums.length; j++)
        {
            max = Math.max(max , nums[j])
        }
        nums[i] = max
    }
    nums[nums.length-1] = -1
    return nums
}

let nums = [17,18,5,4,6,1]
let result = replaceElement(nums)
console.log(result)