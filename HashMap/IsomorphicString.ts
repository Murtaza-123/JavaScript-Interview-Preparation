const isomorphicString = (s:string , t:string)=>
{
     if(s.length != t.length)
     {
        return false;
     }
     let mapS = new Map<string , number>();
     let mapT = new Map<string , number>();
     for(let i = 0; i < s.length; i++)
     {
        if(mapS.get(s[i]) != mapT.get(t[i]))
        {
            return false;
        }
        mapS.set(s[i] , i)
        mapT.set(t[i] , i)
     }
     return true
}

console.log(isomorphicString("paper" , "title"))