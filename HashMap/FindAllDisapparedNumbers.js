var findAllDisapparedNumbers = function (nums) {
    var map = new Map();
    var allDisapparedNumbers = [];
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (var i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            allDisapparedNumbers.push(i);
        }
    }
    return allDisapparedNumbers;
};
var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var result = findAllDisapparedNumbers(nums);
console.log(result);
