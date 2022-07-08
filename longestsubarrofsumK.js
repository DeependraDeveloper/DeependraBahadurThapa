/*  
    (find longest subarray of sum k)

    arr=[4,1,1,1,2,3,5]  and k=5 k is sum not window size
    possible values [4,1],[1,1,1,2],[2,3],[5]
    output:4 length of largest subarrays

[sliding windwow approach] -->[variable size window]

{TAKE TWO POINTERS , SAY "I" AND "J" START FROM ZERO}
{TAKE TWO VARIABLES FOR LONGEST SUBSUBARR AND ADDING THE SUM ,SAY "MAX" AND "SUM" AS ZERO INITIALLY}
{RUN A LOOP WHILE(J<ARRAY.LENGTH)}
{UPADATE THE SUM AS J MOVES FORWARD}
{CHECK OUT 3 CONDITONS}
{IF SUM<K(GIVEN) , THEN MOVE FOWRWARD WITH J++}
{IF SUM===K , THEN UPADTE MAX BY (J-I+1,MAX) AND DONT FOREGET TO INC J++}
{IF SUM>K, THEN MAKE LOOP (WHILE(SUM>K)) UPDATE SUM BY REDUCING ARRAY[I] VALUE AND MAKE I++ OUTSIDE LOOP J++}
{REUTRN MAX VALUE}

*/

function longestSubarrOFsumK(arr, k) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let max = 0;

  while (j < arr.length) {

    sum += arr[j];

    if (sum < k) j++;

    else if (sum == k) {
      max = Math.max(j - i + 1, max);
      j++;

    } else if (sum > k) {

      while (sum > k) {
        sum -= arr[i];
        i++;
      }

      j++;

    }

  }
  return max;
}
console.log(longestSubarrOFsumK([4, 1, 1, 1, 2, 3, 5], 5));
