const merge = (nums1:number[] , m:number , nums2:number[] , n:number )=>
{
     let i = m-1
     let j = n-1
     let k = (m+n) - 1
     while(j >= 0)
     {
        if(nums1[i] >= nums2[j])
        {
             nums1[k--] = nums1[i--]
        }
        else{
            nums1[k--] = nums2[j--]
        }
     }
     return nums1
}

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
let result = merge(nums1 , 3 , nums2 , 3)
console.log(result)