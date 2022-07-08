function lerader(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){

        for(var j=i+1;j<arr.length;j++){
            if(arr[j]>=arr[i]) break;
        }

        if(j==arr.length) res.push(arr[i]);
        
    }
    return res
}
console.log(lerader([15,16,3,2,6,1,4]))

