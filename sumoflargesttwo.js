function sumOflargestWo(arr) {
  let fMax = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > fMax) {
      fMax = arr[i];
      index = i;
    }
  }
  let sMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === index) continue;
    else if (arr[i] > sMax) {
      sMax = arr[i];
    }
  }
  return fMax + sMax;
}
console.log(sumOflargestWo([50, 10, 20, -30, -100]));
