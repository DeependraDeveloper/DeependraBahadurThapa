function threeSUM(arr){
let res=new Set()
  for(let i=0;i<arr.length;i++)
    for(let j=i+1;j<arr.length;j++)
        for(let k=j+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k]===0) res.add([arr[i],arr[j],arr[k]]);
        }
  return res
}
// console.log(threeSUM([-1,0,1,2,-1,-4]))

// function isSumZero(arr){
//     let sum=0
//     for(let ele of arr) sum+=ele;
//     if(sum===0) return true
//     return false
// }

////////////optimized

function threeSumZero(arr){
       
}
console.log(threeSumZero([-1,0,1,2,-1,-4]))