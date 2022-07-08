function longstSubstringwithKdistinctchar(s,k){

    let res=[]

    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length+1;j++)
        res.push(s.substring(i,j))
    }
    let ans=[]
    for(let i=0;i<res.length;i++){
        if(isStrwithKdisctt(res[i],k)){
            ans.push(res[i])
        }
    }
    let max=0
    let out
    for(let i=0;i<ans.length;i++){
        if(ans[i].length>max){
            max=ans[i].length
            out=ans[i]
        }
    }
   return out
}
//console.log(longstSubstringwithKdistinctchar("eceba",2))

function isStrwithKdisctt(str,k){
    let map={}
    for(let ch of str) map[ch]?map[ch]++:map[ch]=1;
    return Object.keys(map).length<=k?true:false
}
// console.log(isStrwithKdisctt("ece"))


/////////optimized

