function longestCONsebseq(arr){
    // arr.sort((a,b)=>a-b)
    // let res=[]
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]==i+1){
    //      res.push(arr[i])
    //     }
    // }
    // return res
    let res=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length+1;j++){
            res.push(arr.slice(i,j))
        }
    }
    console.log(res)
}
console.log(longestCONsebseq([2,6,1,9,4,5,3]))