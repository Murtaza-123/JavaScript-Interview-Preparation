var nextGreaterElement = function (nums1, nums2) {
    var result = [];
    for (var i = 0; i < nums1.length; i++) {
        var val1 = nums1[i];
        var val2 = -1;
        for (var j = nums2.indexOf(val1); j < nums2.length; j++) {
            if (nums2[j] > val1) {
                val2 = nums2[j];
                break;
            }
        }
        result.push(val2);
    }
    return result;
};
var nums1 = [1, 3, 5, 2, 4];
var nums2 = [6, 5, 4, 3, 2, 1, 7];
var result = nextGreaterElement(nums1, nums2);
console.log(result);
