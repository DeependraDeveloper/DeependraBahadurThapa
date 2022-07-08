// union of two sorted arrays

function union(arr1,arr2){
     let set=new Set()
     for(let ele of arr1) set.add(ele)
     for(let ele of arr2) set.add(ele)
     return set.size
}
console.log(union([1,2,3,4],[1,3,5]))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function intersection(arr1,arr2){
  let map={}
  for(let ele of arr1) map[ele]?map[ele]++:map[ele]=1

  let res=[]
  for(let i=0;i<arr2.length;i++){
    if(map[arr2[i]]) {
        res.push(arr2[i])
        map[arr2[i]]--
    }
  }
  return res
}
console.log(intersection([1,2,3,3,4],[2,2,5,6,3,2]))