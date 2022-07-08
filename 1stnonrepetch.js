function firstNonReepeatingChar(str){
      let map={}
      for(let ch of str) map[ch]?map[ch]++:map[ch]=1
      let res=[]
      for (let key in map){
          if(map[key]===1) res.push(key);
      }
      return res.length===0?"_":res[0]
}


console.log(firstNonReepeatingChar("abba"))