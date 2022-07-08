function maxConsecOnes(arr){
    let count=0
    let max=0
    for(let ele of arr){
        if(ele===1) count++
        else count=0
        max=Math.max(count,max)
    }
    return max
}
console.log(maxConsecOnes([0,1,0,1,1,1,1,0,1,1,1]))