//given two array add 

function add(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        arr1[i]=arr1[i]+arr2[i]
    }
    return arr1
}
console.log(add([1,2,0,0],[3,4,0,0]))