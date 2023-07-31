function isValidAnagram(s, t) {
    return s.split("").sort().join() === t.split("").sort().join();
}
const isTrue = isValidAnagram("rat", "car");
console.log(isTrue);
//# sourceMappingURL=ValidAnagram.js.map