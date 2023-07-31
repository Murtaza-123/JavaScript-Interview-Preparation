function twoSum(nums, target) {
    let array = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                array.push(i, j);
            }
        }
    }
    return array;
}
let nums = [3, 2, 4];
let result = twoSum(nums, 9);
console.log(result);
//# sourceMappingURL=TwoSum.js.map