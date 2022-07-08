let isString=val=>(val>="a" && val<="z" || val>="A" && val<="Z")

function reverseString(str){
    let arr=str.split("")
    let i=0
    let j=arr.length-1
    while(i<j){
        if(!(isString(arr[i]))) i++;
        else if(!(isString(arr[j]))) j--;
        else{
            [arr[i],arr[j]]=[arr[j],arr[i]]
            i++
            j--
        }
    }
    return arr.join("")
}
console.log(reverseString("d_e_e$pa@k!"))

















