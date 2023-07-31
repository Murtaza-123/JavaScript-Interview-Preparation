const moveZeros = (nums:number[]):void=>
{
    let i = 0;
    let j = 0;
    while(i < nums.length)
    {
        if(nums[i] !=0)
        {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
        i++
    }
}
let nums = [0 , 1 , 0 , 3 , 12]
console.log(moveZeros(nums))