function nonREPEATarrELE(arr){
    let map={}
    let res=[]

    for(let ele of arr) map[ele]?map[ele]++:map[ele]=1
  
    for(let key in map){
        if(map[key]<=1)res.push(+key)
    }
    
    return res
}
console.log(nonREPEATarrELE([-1,2,-1,2,3]))