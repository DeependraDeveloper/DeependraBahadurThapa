// compare string2 in string1 occurs how many times


function compare(str1,str2){
   let res=[]
   for(let i=0;i<str1.length;i++){
    for(let j=i+1;j<str1.length+1;j++)
        res.push(str1.substring(i,j))
   }
   let count=0
   for(let i=0;i<res.length;i++){
    if(res[i]==str2) count++
   }
   return count
}
console.log(compare("abcabcglkdjglkdjabcjgkadglkaabckjkejgabcagfhaafg","abc"))