var merge = function (nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = (m + n) - 1;
    while (j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k--] = nums1[i--];
        }
        else {
            nums1[k--] = nums2[j--];
        }
    }
    return nums1;
};
var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var result = merge(nums1, 3, nums2, 3);
console.log(result);
