// given an string check if repeated substring is present in the s
// ex:abab o/p=true
//    i j
function isRepeatedSubstrPattern(str){
      let i=0;
      let j=Math.floor(str.length/2)
   
      while(i<str.length/2 && j<str.length){
        if(str[i]!=str[j])  return false;
        i++;
        j++;
      }
      return true;
}
console.log(isRepeatedSubstrPattern("abcabcabcabc"))