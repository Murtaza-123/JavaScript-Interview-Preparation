var maximumBalloons = function (s) {
    var a = 0, b = 0, o = 0, n = 0, l = 0, count = 0;
    var array = s.split("");
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var char = array_1[_i];
        switch (char) {
            case "a": {
                a++;
                break;
            }
            case "b": {
                b++;
                break;
            }
            case "o": {
                o++;
                break;
            }
            case "l": {
                l++;
                break;
            }
            case "n": {
                n++;
                break;
            }
        }
        if (a >= 1 && b >= 1 && n >= 1 && o >= 2 && l >= 2) {
            count++;
            a -= 1;
            b -= 1;
            n -= 1;
            o -= 2;
            l -= 2;
        }
    }
    return count;
};
console.log(maximumBalloons("loonbalxballpoon"));
