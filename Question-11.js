// Question 11 2D array

// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// loop

let testArr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

function arrNavigate(arr) {
  let result = [];
  let row = [];
  let column = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!result[i]) {
      result[i] = [];
    }
    for (let j = 0; j < arr[0].length; j++) {
      if (row[i] || column[j]) {
        result[i][j] = 0;
      } else {
        result[i][j] = 1;
      }
    }
  }

  return result;
}
console.log(arrNavigate(testArr));
