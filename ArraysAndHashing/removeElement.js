var removeElements = function (nums, val) {
    var updatedArray = [nums.length];
    var count = 0;
    for (var i = 0, k = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            count++;
            updatedArray[k++] = nums[i];
        }
    }
    for (var i = 0; i < updatedArray.length; i++) {
        nums[i] = updatedArray[i];
    }
    return count;
};
var nums = [3, 2, 2, 3];
var result = removeElements(nums, 3);
console.log(result);
