const findAllDisapparedNumbers = (nums:number[]):number[]=>
{
    const map = new Map<number,number>();
    const allDisapparedNumbers = []
    for(let i = 0; i < nums.length;i++)
    {
       map.set(nums[i] , i)
    }
    for(let i = 1; i <= nums.length; i++)
    {
        if(!map.has(i))
        {
            allDisapparedNumbers.push(i)
        }
    }
    return allDisapparedNumbers
}

const nums = [4,3,2,7,8,2,3,1]
const result = findAllDisapparedNumbers(nums)
console.log(result)