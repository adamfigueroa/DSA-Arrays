// Question 6 Filtering an array

// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

const testArr = [1, 1, 2, 43, 2, 3, 5, 6, 2, 7, 8, 9];

function filterNoFilter(arr, filter = 5) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= filter) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}
console.log(filterNoFilter(testArr));
