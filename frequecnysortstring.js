
var frequencySort = function(s) {
   
    let map={}

    for(let i=0;i<s.length;i++) map[s[i]]=map[s[i]]?map[s[i]]+s[i]:s[i];
    
   
    return Object.values(map).sort((a,b)=>b.length-a.length).join("")
};

console.log(frequencySort("tree"))