var wordPattern = function (pattern, s) {
    var array = s.split(" ");
    var map1 = new Map();
    var map2 = new Map();
    for (var i = 0; i < pattern.length; i++) {
        if (!map1.get(pattern[i]))
            map1.set(pattern[i], i);
        if (!map2.get(array[i]))
            map2.set(array[i], i);
    }
    for (var i = 0; i < pattern.length; i++) {
        if (map1.get(pattern[i]) !== map2.get(array[i])) {
            return false;
        }
    }
    return true;
};
console.log(wordPattern("abba", "dog cat cat dog"));
