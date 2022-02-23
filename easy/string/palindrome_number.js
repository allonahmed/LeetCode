/**
 * @param {number} x
 * @return {boolean}
 * @link https://leetcode.com/problems/palindrome-number/submissions/
 */


//my method
const isPalindrome = (num) => {
  let string = num.toString();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};


//optimized version
const isPalindrome2 = (num) => {
    return num.toString() === num.toString().split('').reverse('').join('');
}