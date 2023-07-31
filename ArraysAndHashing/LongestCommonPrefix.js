const longestCommonPrefix = (strs) => {
    let output = [];
    let sorted = strs.sort((a, b) => a < b ? -1 : 1);
    let firstword = sorted[0];
    let lastword = sorted[strs.length - 1];
    for (let i = 0; i < firstword.length; i++) {
        if (firstword[i] == lastword[i]) {
            output.push(firstword[i]);
        }
        else {
            break;
        }
    }
    return output.join("");
};
let strs = ["flower", "flow", "flight"];
let result = longestCommonPrefix(strs);
console.log(result);
//# sourceMappingURL=LongestCommonPrefix.js.map