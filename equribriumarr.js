//equilibrium index of array

function equilibrium(arr) {
  let sum = 0;
  let leftSum = 0;
  let rightSum = 0;
  for (let ele of arr) sum += ele;

  rightSum = sum;

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum == rightSum) return i;
    else leftSum = leftSum + arr[i];
  }
  return -1;
}
j
console.log(equilibrium([-7,1,5,2,-4,3,0]));
