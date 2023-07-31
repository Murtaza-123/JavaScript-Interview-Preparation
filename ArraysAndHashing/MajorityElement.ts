const majorityElement = (nums: number[]): number => {
  let n = nums.length;
  nums = nums.sort();
  let majorityElement = Math.floor(n/2);
  return nums[majorityElement];
};
 
let array = [2,2,1,1,1,2,2]
let result = majorityElement(array)
console.log(result)