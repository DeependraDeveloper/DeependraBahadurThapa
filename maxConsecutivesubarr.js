function maxConSubarr(arr) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) subs.push(arr.slice(i, j));
  }

  let sum = 0;
  let max = [];
  for (let i = 0; i < subs.length; i++) {
    for (let j = 0; j < subs[i].length; j++) {
      sum += subs[i][j];
    }
    max.push(sum);
    sum = 0;
  }
  return Math.max(...max);
}
console.log(maxConSubarr([-5, 4, 6, -3, 4, -1]));
