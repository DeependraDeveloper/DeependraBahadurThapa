function firstneginwinofk(arr,k){
    let res=[]
         for(let i=0;i<arr.length-k+1;i++){
            for(let j=i;j<j+k;j++){
                if(arr[j]<0){
                    res.push(arr[j])
                    break;
                }
            }
         }
     return res
}
console.log(firstneginwinofk([1,-2,3,-4,-20,3],2))
 // -2,-2,-4,-4