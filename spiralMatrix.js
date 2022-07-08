function spiral(arr) {

  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;

  let res = [];
  let size = arr.length * arr[0].length;
  while(res.length < size) {
    for (let i = left; i <= right && res.length < size; i++)  res.push(arr[top][i]);
    top++;

    for (let i = top; i <= bottom && res.length < size; i++) res.push(arr[i][right]);
    right--;

    for (let i = right; i >= left && res.length < size; i--) res.push(arr[bottom][i]);
    bottom--;

    for (let i = bottom; i >= top && res.length < size; i--) res.push(arr[i][left]);
    left++;
  }
  return res;

}
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiral(arr));


