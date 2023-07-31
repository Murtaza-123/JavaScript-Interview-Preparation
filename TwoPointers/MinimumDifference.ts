let minimumDiffernece = (nums:number[] , k:number)=>
{
    if(k == 0)
    {
        return 0
    }
    nums.sort((a,b)=>a-b)
    let i = 0;
    let j = k-1
    let minimum = Number.MAX_VALUE
    while(j < nums.length)
    {
        minimum = Math.min(minimum , nums[j] - nums[i] )
        i++;
        j++;
    }
   return minimum
}

let nums = [9,4,1,7]
let result = minimumDiffernece(nums , 2)
console.log(result)