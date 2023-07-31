var RemoveDuplicates = function (nums) {
    var count = 1;
    var i = 1;
    var j = 0;
    while (i < nums.length) {
        if (nums[i] != nums[j]) {
            nums[count++] = nums[i];
        }
        i++;
        j++;
    }
    return count;
};
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(RemoveDuplicates(nums));
