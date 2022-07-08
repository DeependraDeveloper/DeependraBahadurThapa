//given two string ,split them into substring to make a palindrome string

function isPalindorme(str){
    let i=0
    let j=str.length-1
    while(i<j){
        if(str[i]!==str[j]) return false
        i++
        j--
    }
    return true
}
// console.log(isPalindorme("racecar"))

// function checkPalindromefromatString(str1,str2){
//     let res=[]
//     for(let i=0;i<str1.length;i++){
//          res.push(str1.substring(0,i)+str2.substring(i) )
//          res.push(str2.substring(0,i)+str1.substring(i))
//     }
    
//     for(let i=0;i<res.length;i++){
//         if(isPalindorme(res[i])){
//             console.log(res[i])
//             return true
//         }
//     }
//     return false
// }
// console.log(checkPalindromefromatString("abdef","fecab"))

//optimized

function checkPalindromefromatString(str1,str2){
    return check(str1,str2)||check(str2,str1)
}

function check(s1,s2){
    let left=0
    let right=s2.length-1
    while(left<right && s1.charAt(left)==s2.charAt(right)){
        console.log(s1.charAt(left))
        console.log(s2.charAt(right))
        left++
        right--
       
    }

    if(left>=right) return true
  
    return isPalindorme(s1.substring(left,right+1)) || isPalindorme(s2.substring(left,right+1))
}

console.log(checkPalindromefromatString("abdef","fecab"))

