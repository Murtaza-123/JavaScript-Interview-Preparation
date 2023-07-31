let RemoveDuplicates = (nums:number[]):number=>
{
    let count = 1;
    let i = 1;
    let j = 0
    while(i < nums.length)
    {
        if(nums[i] != nums[j])
        {
            nums[count++] = nums[i]
        }
        i++;
        j++;
    }
    return count
}
let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(RemoveDuplicates(nums))

