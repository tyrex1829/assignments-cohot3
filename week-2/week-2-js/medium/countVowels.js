/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let strNew = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < strNew.length; i++) {
    if (
      strNew[i] === "a" ||
      strNew[i] === "e" ||
      strNew[i] === "i" ||
      strNew[i] === "o" ||
      strNew[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
