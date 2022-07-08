function replaceBynextGreatestEle(arr){
    for(let i=0;i<arr.length;i++){
        let max=arr[i]
        for(let j=i+1;j<arr.length;j++){
             if(arr[j]>max){
                max=arr[j]
             }
             arr[i]=max
        }
    }
    return arr
}
console.log(replaceBynextGreatestEle([1,4,10,20,4,40]))