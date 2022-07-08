// -- >> 
//abaabacb
//cdaabacd
//5 --> abbac  || abcd || ebcf -->bc 

function longstSubstring(str1,str2){
   let i=0
   let j=0
   let res=[]
   let count=0
   
   while(i<str1.length && j<str2.length){
       if(str1[i]===str2[j]) count++;
       else{
        res.push(count)
        count=0
       }
       i++
       j++
   }
   console.log(res)
   return Math.max(...res)
}
console.log(longstSubstring("abcdaabd","ebctaabu"))



                        //   bc bc 2 && aab 3
                        