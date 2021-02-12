// Question 9 Remove characters

// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

const testStr = 'Battle of the Vowels: Hawaii vs. Grozny';

function disemVoweler(str, vowel) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let vowelFound = true;
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        vowelFound = false;
      }
    }
    if (vowelFound) {
      result += str[i];
    }
  }
  return result;
}
console.log(disemVoweler(testStr, 'aeiou'));
