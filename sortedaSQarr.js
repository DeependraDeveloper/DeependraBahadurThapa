// you have a sorted array return sorted squared arr

function sortedSQarr(arr){
     for(let i=0;i<arr.length;i++) arr[i]=arr[i]*arr[i];

     return mergeSort(arr)
}
console.log(sortedSQarr([-6,-4,1,2,3,5]))


function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid,arr.length))

    return merge (left,right)
}
//console.log(mergeSort([5,4,3,2,1,10,-2]))

function merge(arr1,arr2){
    let i=0
    let j=0
    let res=[]
    while(i<arr1.length && j<arr2.length){
       if(arr1[i]<arr2[j]){
        res.push(arr1[i])
        i++
       }else{
        res.push(arr2[j])
        j++
       }
    }
    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}

complexity is fort sorting o(nlogn)+o(n)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPTIMIZED

function sortedSquaredArray(arr){

    let res=new Array(arr.length)

    let left=0
    let right=arr.length-1
 

    for(let i=arr.length-1;i>=0;i--){

         if(Math.abs(arr[left])>arr[right]){
            res[i]=arr[left]*arr[left]
            left++
         }else{
            res[i]=arr[right]*arr[right]
            right--
         }

    }

    return res
}
console.log(sortedSquaredArray([-6,-4,1,2,3,5]))
 ////                            L          R
 /////                                      i