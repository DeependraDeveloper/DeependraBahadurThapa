//Most Brute force way 
function isUnquie(string){
    let map={}
    for(let ch of string) map[ch]?map[ch]++:map[ch]=1
    for(let key in map)  if(map[key]>1) return false
    return true
}

function longestSubstrwithoutrepeatingchar(str){
    let res=[]
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++)
            res.push(str.substring(i,j))
    }

    let ans=[]

    for(let i=0;i<res.length;i++){
         if(isUnquie(res[i])==true) ans.push(res[i])
    }
    
    let max=0
    let ind=0

    for(let i=0;i<ans.length;i++){
        if(ans[i].length>max){
            max=ans[i].length
            ind=i
        }
    }
    return ans[ind].length
}
console.log(longestSubstrwithoutrepeatingchar("wwwkew"))

///////////////////////////////////////////////////////////////

function optimexed(str){
    let i=0
    let j=0
    let max=0
    let set=new Set()
  
    while(j<str.length){
        if(!set.has(str[j])){
            set.add(str[j])
            j++
            max=Math.max(set.size,max)
        }else{
            set.delete(str[i])
            i++
        }     
    }

    return max
}
console.log(optimexed("wwwkew"))