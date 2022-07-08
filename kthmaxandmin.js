function KthMaxANDmin(arr, k) {
  arr.sort((a, b) => a - b);
  let lar = arr[arr.length - k];
  let smal = arr[k - 1];
  return [lar, smal];
}
console.log(KthMaxANDmin([1, 2, 3, 4, 5, 6], 4));


