
function longestPalindromeSubstring(str){
    let res=[]
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++)
            res.push(str.substring(i,j))
    }

    let ans=[]

    for(let i=0;i<res.length;i++){
        if(palindrome(res[i])) ans.push(res[i])
    }

    let max=0
    let index=0
    for(let i=0;i<ans.length;i++){
        if(ans[i].length>max){
            max=ans[i].length
            index=i
        }
    }
    return ans[index]
}

console.log(longestPalindromeSubstring("abcdcb"))

function palindrome(str){
    let i=0
    let j=str.length-1
    while(i<j){
        if(str[i]!==str[j]) return false
        i++
        j--
    }
    return true
}





