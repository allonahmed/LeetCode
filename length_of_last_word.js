/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.com/problems/length-of-last-word/submissions/
 */

//seperate each word and put in array
//return array[length-1].length
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && count !== 0) {
      break;
    } else if (s[i] !== " ") {
      count++;
    }
  }
  return count;
};
