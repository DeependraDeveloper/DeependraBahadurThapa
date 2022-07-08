//brute force
function sort(arr){
    let neg=[]
    let pos=[]
    for(let i=0;i<arr.length;i++){
         if(arr[i]<0)  neg.push(arr[i])
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0)  pos.push(arr[i])
   }
   return [...neg,...pos]
}
console.log(sort([1,2,3,-10,-10,-10]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveNegatives(arr){
    let j=0  // arr.length-1 for right side partioning
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            j++    //j--
        }
    }
   return arr
}
console.log(moveNegatives([1,2,3,-10,-10,-10]))




