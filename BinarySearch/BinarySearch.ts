function binarySearchIteratively(nums: number[], Number) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let mid = start + end / 2
        if (Number == nums[mid]) {
            return mid;
        } else if (nums[mid] < Number) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return -1

}

let nums = [1, 4, 65, 88, 100];
let result = binarySearchIteratively(nums, 65);
console.log(result);