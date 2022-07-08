
function duplicate(arr){
    let map={}
    for(let ele of arr)  map[ele]?map[ele]++:map[ele]=1
    let res=[]
    for(let key in map){
        if(map[key]>1) res.push(+key);
    }
    return res
}
console.log(duplicate([1,2,3,4,1,2]))