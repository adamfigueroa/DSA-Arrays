// Question 10 Products

// Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

const testArr = [1, 3, 9, 4];

function products(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let calc = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        calc *= arr[j];
      }
    }
    result.push(calc);
  }
  return result;
}
console.log(products(testArr));
