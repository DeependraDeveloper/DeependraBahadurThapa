function removeDuplicates(arr){
    let set=new Set(arr)
    let i=0
    let j=1
   while(j<arr.length){
    if(arr[j]==arr[i]){
        j++
    }else{
        i++
        arr[i]=arr[j]
        j++
    }
   }
   for(let i=arr.length-1;i>=set.size;i--); arr.pop()
   return arr
}
console.log(removeDuplicates([1,2,2,3,4,5,5,6]))


