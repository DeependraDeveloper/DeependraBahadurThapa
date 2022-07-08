function reverse(str) {
  let arr = str.split("");
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join("");
}

function reverseEveryWord(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] = reverse(arr[i]);
  return arr;
}

console.log(reverseEveryWord(["deepak", "kumar", "subash"]));

///////////////////
function rev(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) arr[i] = reverse(arr[i]);

  let j = 1;

  for (let i = 0; i < arr.length; i += 2) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j += 2;
  }

  return arr.join(" ");
}

console.log(rev("aA bB cC dD"));
//("Bb Aa Dd Cc")
