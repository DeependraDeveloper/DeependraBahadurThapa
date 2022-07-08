/*
                 input/output method to genearte revursive tree

                 ex: "ab"

                 for every character ,we choose input / output

                                                            ip | op
                                                           "ab"| ""
                                                           [ for "a"]
                                                        ip | op            ip | op
[once it is taken and then its not taken and input ]  ("b" && "")       ("b"&&"a")
            [becomes smaller]                          
             
            [for b]                                   ("" && "b")        ("a" && "ab")

*/



function subSetsofStrring(str){

    const result=[]
    
    function dfs(i,str,slate){
        //base case
        if(i===str.length) return result.push(slate.slice());
            
        
        dfs(i+1,str,slate) //excluding
        slate.push(str[i]) 
        
        //including
        dfs(i+1,str,slate)
        slate.pop()
    }
    dfs(0,str,[])

    return result

}
console.log(subSetsofStrring("abc"))


//////////////////////////////////////////////////

function subSets(arr){

    const result=[]
    
    const dfs=(i,arr,slate)=>{
        //base case
        if(i===arr.length){
            result.push(slate.slice())
            return
        }
        dfs(i+1,arr,slate) //excluding
    
        slate.push(arr[i])  //including
        dfs(i+1,arr,slate)
        slate.pop()
    }
    dfs(0,arr,[])
    return result
}
    console.log(subSets([1,2,3]))