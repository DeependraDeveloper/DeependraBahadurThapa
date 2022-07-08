function repalceVowel(s){
   let map={"a":1,"e":1,"i":1,"o":1,"u":1}
   let str=s.split("")
   let i=0
   let j=str.length-1
 
   while(i<j){
       if(map[str[i]] && map[str[j]]){
           [str[i],str[j]]=[str[j],str[i]]
           i++
           j--
       }else if(!(map[str[i]]) && !(map[str[j]])){
        i++
        j--
       }else if(!(map[str[i]])) i++
       else if(!(map[str[j]])) j--
   }
   return str.join("")
}
console.log(repalceVowel("hello world"))
//holle