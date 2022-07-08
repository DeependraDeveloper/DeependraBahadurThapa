function minimumJUMPS(arr){
    let jumps=[0]
   for(let i=1;i<arr.length;i++){
    for(let j=0;j<i;j++){
        if(i<=j+arr[j]){
           jumps[i]=Math.min(jumps[i],jumps[j]+1)
           break;
        }
    }
   }
   return jumps
}
console.log(minimumJUMPS([2,1,3,2,3,4,5,1,2,8]))