var minimumDiffernece = function (nums, k) {
    if (k == 0) {
        return 0;
    }
    nums.sort(function (a, b) { return a - b; });
    var i = 0;
    var j = k - 1;
    var minimum = Number.MAX_VALUE;
    while (j < nums.length) {
        minimum = Math.min(minimum, nums[j] - nums[i]);
        i++;
        j++;
    }
    return minimum;
};
var nums = [9, 4, 1, 7];
var result = minimumDiffernece(nums, 2);
console.log(result);
