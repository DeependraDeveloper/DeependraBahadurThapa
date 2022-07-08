// Input:
// a1[] = {1, 2, 3, 4, 5, 6}
// a2[] = {1, 2, 4}
// Output:
// Yes
// Explanation:
// a2[] is a subset of a1[]

// Example 3:

// Input:
// a1[] = {10, 5, 2, 23, 19}
// a2[] = {19, 5, 3}
// Output:
// No
// Explanation:
// a2[] is not a subset of a1[]

function isSubSet(arr1,arr2){
  let map={}
  for(let ele of arr1) map[ele]?map[ele]++:map[ele]=1
  
  for(let i=0;i<arr2.length;i++){
    if(!map[arr2[i]]){
        return false
    }
  }
  return true
}

console.log(isSubSet([10, 5, 2, 23, 19],[10, 5, 9]))