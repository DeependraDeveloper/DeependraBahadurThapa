function rotate(arr,k){
    let i=0
    let j=arr.length-1
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++
        j--
    }

    reverse(arr,0,k-1)
    reverse(arr,k,arr.length-1)
    return arr
}
console.log(rotate([1,2,3,4,5,6],3))

function reverse(arr,i,j){
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++
        j--
    }
    return arr
}