//  Question 8

// Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

const testArr1 = [1, 3, 6, 8, 11];

const testArr2 = [2, 3, 5, 8, 9, 10];

function mergeArrays(arr1, arr2) {
  let result = [];
  let i1 = 0;
  let i2 = 0;
  let pos = 0;
  while (pos < arr1.length + arr2.length) {
    let d1 = i1 >= arr1.length;
    let d2 = i2 >= arr2.length;

    if (!d1 && (d2 || arr1[i1] < arr2[i2])) {
      result.push(arr1[i1]);
      i1++;
    } else {
      result.push(arr2[i2]);
      i2++;
    }
    pos++;
  }
  return result;
}
console.log(mergeArrays(testArr1, testArr2));
