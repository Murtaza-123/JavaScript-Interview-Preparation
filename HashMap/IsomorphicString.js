var isomorphicString = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    var mapS = new Map();
    var mapT = new Map();
    for (var i = 0; i < s.length; i++) {
        if (mapS.get(s[i]) != mapT.get(t[i])) {
            return false;
        }
        mapS.set(s[i], i);
        mapT.set(t[i], i);
    }
    return true;
};
console.log(isomorphicString("paper", "title"));
