const removeElements = (nums:number[] , val:number):number=>
{
    const updatedArray:number[] = [nums.length];
    let count = 0
    for(let i = 0 , k = 0; i < nums.length;i++)
    {
       if(nums[i] != val)
       {
        count++;
        updatedArray[k++] = nums[i];
       }
    }
    for(let i = 0 ; i < updatedArray.length;i++)
    {
        nums[i] = updatedArray[i]
    }
    return count;
}

let nums:number[] = [3,2,2,3]
let result = removeElements(nums , 3)
console.log(result)