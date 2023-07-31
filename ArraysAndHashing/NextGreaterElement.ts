const nextGreaterElement = (nums1:number[] , nums2:number[]):number[]=>
{
    let result:number[] = []
    for(let i = 0; i < nums1.length;i++)
    {
        let val1 = nums1[i]
        let val2 = -1
         for(let j = nums2.indexOf(val1); j < nums2.length;j++)
         {
           
                if(nums2[j] > val1)
                {
                    val2 = nums2[j]
                    break;
                }
         }
         result.push(val2)

    }
    return result
}

let nums1 = [1,3,5,2,4];
let nums2 = [6,5,4,3,2,1,7];
let result = nextGreaterElement(nums1 , nums2)
console.log(result)