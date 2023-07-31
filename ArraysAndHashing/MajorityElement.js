var majorityElement = function (nums) {
    var n = nums.length;
    nums = nums.sort();
    var majorityElement = Math.floor(n / 2);
    return nums[majorityElement];
};
var array = [2, 2, 1, 1, 1, 2, 2];
var result = majorityElement(array);
console.log(result);
