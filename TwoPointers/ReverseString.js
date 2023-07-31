var reversestring = function (s) {
    var i = 0;
    var j = s.length - 1;
    while (i <= j) {
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
};
var strs = ["h", "e", "l", "l", "o"];
var result = reversestring(strs);
console.log(result);
