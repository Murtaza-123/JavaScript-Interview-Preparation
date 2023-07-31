const maximumBalloons = (s: string) => {
  let a = 0,
    b = 0,
    o = 0,
    n = 0,
    l = 0,
    count = 0;

  const array = s.split("");
  for (const char of array) {
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
    if(a >= 1 && b >= 1 && n >= 1 && o >= 2 && l >= 2)
    {
        count++;
        a-=1;
        b-=1;
        n-=1;
        o-=2
        l-=2
    }
  }
  return count

};
console.log(maximumBalloons("loonbalxballpoon"));
