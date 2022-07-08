//brute force

function sort012(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    if (arr[i] === 1) count1++;
    if (arr[i] === 2) count2++;
  }
  let res = [];
  for (let i = 0; i < count0; i++) res.push(0);
  for (let i = 0; i < count1; i++) res.push(1);
  for (let i = 0; i < count2; i++) res.push(2);
  return res;
}
console.log(sort012([0, 1, 2, 2, 1, 0, 1, 2, 0, 2, 1]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function arrange(arr) {
  let i = 0;
  let k = 0;
  let j = arr.length - 1;
  
  while (i <= j) {
    if (arr[i] === 0) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      i++;
      k++;
    } else if (arr[i] === 1) i++;
    else if (arr[i] === 2) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
  }
  return arr;
}
console.log(arrange([2, 2, 1, 1, 0, 0, 1, 1, 0, 2, 2, 1, 0]));
