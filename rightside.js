function rightSideMax(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>max) max=arr[j]
        }
        arr[i]=max
        max=0
    }
    arr[arr.length-1]=-1
    return arr
}
console.log(rightSideMax([17,18,5,4,6,1]))


