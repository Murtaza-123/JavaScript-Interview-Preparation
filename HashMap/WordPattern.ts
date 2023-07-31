const wordPattern = (pattern: string, s: string): boolean => {
  const array = s.split(" ");
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();
  if (pattern.length !== array.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!map1.get(pattern[i])) map1.set(pattern[i], i);
    if (!map2.get(array[i])) map2.set(array[i], i);
  }
  for (let i = 0; i < pattern.length; i++) {
    if (map1.get(pattern[i]) !== map2.get(array[i])) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
