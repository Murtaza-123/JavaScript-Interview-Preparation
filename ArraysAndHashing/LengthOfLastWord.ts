const lengthOfLastWord = (s: string): number => {
  if (!s) return 0;
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " ") {
      if (len) {
        return len;
      }
        continue;
    }
    len++;
  }
  return len;
};
let length_of_last_word = lengthOfLastWord("Hello World");
console.log(length_of_last_word);
