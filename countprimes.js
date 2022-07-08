function isPrime(num){
    let res=[]
    for(let i=1;i<=num;i++){
        if(num%i===0) res.push(i)
    }
    return res.length>2?false:true
}
// console.log(isPrime(4))

//count how many elemenst are prime number in a given array

function primeCount(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])) count++
    }
    return count
}
console.log(primeCount([4,23,27,17,5]))