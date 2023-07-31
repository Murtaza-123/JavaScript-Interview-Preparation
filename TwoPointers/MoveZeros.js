var moveZeros = function (nums) {
    var i = 0;
    var j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
        i++;
    }
};
var nums = [0, 1, 0, 3, 12];
console.log(moveZeros(nums));
