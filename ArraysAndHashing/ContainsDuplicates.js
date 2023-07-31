function containsDuplicate(nums) {
    nums = nums.sort();
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }
    }
    return false;
}
let nums = [1, 2, 4, 1];
let result = containsDuplicate(nums);
console.log(result);
// public static boolean isduplicates(int[] array)
// {
//     Arrays.sort(array);
//     for(int i = 0; i < array.length-1;i++)
//     {
//         if(array[i] == array[i+1])
//         {
//             return true;
//         }
//     }
//     return false;
// }
//# sourceMappingURL=ContainsDuplicates.js.map