// Question 12 String rotation

// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let mergedStr = str1 + str2;

  if (mergedStr.indexOf(str2) === -1) {
    return false;
  } else return true;
}
console.log(stringRotation('amazon', 'azonam'));
