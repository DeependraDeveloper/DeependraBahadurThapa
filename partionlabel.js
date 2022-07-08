//given an string
//partion it or dived it into sub strings or partions such that thier length between
//the start and end is oupted
//ex:"abcbdazyxssxyz"
//outp:[6,8]
function partionlabels(str){
   let lastIndexs=[]
    for(let i=0;i<str.length;i++){
        lastIndexs[str[i]]=i
    }
    console.log(lastIndexs)

    let j=0
    let start=0;
    let ans=[]
    for(let i=0;i<str.length;i++){
       j=Math.max(j,lastIndexs[str[i]])
       if(i==j){
        ans.push(i-start+1)
        start=i+1
       }
    }
    return ans
}
console.log(partionlabels("ababcbacadefegdehijhklij"))


