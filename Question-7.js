// Question 7 Max sum in the array

// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

let input = [4, 6, -3, 5, -2, 1];
// Output: 12

function maxSum(arr) {
  let result = 0;
  let compareNum = 0;

  for (let i = 0; i < arr.length; i++) {
    compareNum += arr[i];
    if (result < compareNum) {
      result = compareNum;
    }
    if (compareNum < 0) {
      compareNum = 0;
    }
  }
  return result;
}
console.log(maxSum(input));
