function binarySearchIteratively(nums, Number) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
        var mid = start + end / 2;
        if (Number == nums[mid]) {
            return mid;
        }
        else if (nums[mid] < Number) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}
var nums = [1, 4, 65, 88, 100];
var result = binarySearchIteratively(nums, 65);
console.log(result);
