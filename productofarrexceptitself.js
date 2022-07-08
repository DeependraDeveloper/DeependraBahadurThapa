//brutefroce

/*
function productOFarrayExceptItself(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) continue;
      product *= arr[j];
    }
    res.push(product);
    product = 0;
  }
  return res;
}
console.log(productOFarrayExceptItself([2, 3, 4, 5]));
*/
// [60,40,30,24]

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function productOFarrayExceptItself(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++)  product*=arr[i];

  for(let i=0;i<arr.length;i++) arr[i]=product/arr[i];
  
  return arr
}
console.log(productOFarrayExceptItself([2, 3, 4, 5]));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pattern optimized
function productOFarrayExceptItself(arr) {
 
    let leftproduct=[]
    let rightproduct=[]
    let result=[]
 
    for(let i=0;i<arr.length;i++){
        if(leftproduct.length==0) leftproduct.push(1);
        else leftproduct.push((leftproduct[i-1]*arr[i-1]));
    }
   
    for(let i=arr.length-1;i>-1;i--){
        if(rightproduct.length==0) rightproduct.push(1);
        else rightproduct.unshift(rightproduct[0]*arr[i+1])
    }

    for(let i=0;i<leftproduct.length;i++){
        result.push(leftproduct[i]*rightproduct[i])
    }
    return result

}
console.log(productOFarrayExceptItself([2, 3, 4, 5]));