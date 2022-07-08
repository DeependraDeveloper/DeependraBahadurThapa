function maxSUMofSIZEk(arr,k){

  let sum=0

  for(let i=0;i<k;i++) sum+=arr[i]

  let max=sum

  for(let i=k;i<arr.length;i++){
    sum=sum-arr[i-k]+arr[i]
    max=Math.max(sum,max)
  }

  return max

}
console.log(maxSUMofSIZEk([2,5,1,8,2,9,1],3))
/*
[sliding window approach]
TAKE A SUM VARIABLE
take  a max valriable
GET THE SUM OF FIRST K SUBARRAY
now loop from k to end of arr
update sum as sum=sum[i]-arr[i-1]+arr[i]
update max and return it
*/


