function isPrime(num){
    let res=[]
    for(let i=2;i<num;i++){
        if(num%i===0 )  res.push(i);
    }
    // console.log(res)
   return res.length?false:true
}
console.log(isPrime(191))