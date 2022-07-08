function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let res = [];
 
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i++;
      k++;
    } else if (arr2[j] < arr1[i]) {
      res[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < arr1.length) res[k++] = arr1[i++];

  while (j < arr2.length) res[k++] = arr2[j++];

  return res;
}
console.log(merge([1, 3, 5], [2, 4, 10, 11, 12]));

// 0(LOG N)