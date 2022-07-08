function subSequence(str,output){
    let res=[]

   if(str.length==0)  return output;
   
   res.push(subSequence(str.substring(1),output+str[0]))
   res.push(subSequence(str.substring(1),output))

   return res
 }
console.log(subSequence("abc",""))


function subSequenceofarr(arr){
    let res=[]

    function dfs(arr,i,slate){
        if(i===arr.length)  return  res.push(slate.slice())
         dfs(arr,i+1,slate) ; slate.push(arr[i])
         dfs(arr,i+1,slate) ; slate.pop()
     }
     dfs(arr,0,[])

     return res
}
console.log(subSequenceofarr([1,2,3]))

