function totalWays(arr){
    let t=[]
     for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            t[i][j]=t[i-1][j]+t[i][j-1]
        }
     }
     return t
}
console.log(totalWays([[a,b,c,d],[e,f,g,h],[i,j,k,l],[m,n,o,p]]))