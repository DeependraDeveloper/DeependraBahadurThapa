//given two sorted arrays of size m and n return the median of two arrays
// ex:[1,3] [2] ==>[1,2,3] == 2
// ex:[1,2] [3,4] ==> [1,2,3,4] == 2.5

function median(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr1.length) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  let ind = Math.floor(res.length / 2);

  return res.length % 2 !== 0 ? res[ind] : (res[ind] + res[ind - 1]) / 2;
}
console.log(median([1,2,3], [3]));
