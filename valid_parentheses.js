/**
 * @param {string} s
 * @return {boolean}
 * @link https://leetcode.com/problems/valid-parentheses/submissions/
 */

//logic:
//if opening symbol, push to stack. else pop
//all opening symbols must correspond with their closing symbol (unless there are more opening symbols)
//to verify that all symbols are closed, we will check that the size of stack is empty when iteration of string is complete
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let stack = []; // represents our "stack"
  let symbols = {
    // object that contains all symbols
    "{": "}",
    "[": "]",
    "(": ")"
  };

  for (let e = 0; e < s.length; e += 1) {
    if (symbols[s[e]]) {
      // essentially checking is the key value of s[e] exists in our symbols object
      stack.push(s[e]);
    } else {
      if (symbols[stack.pop()] !== s[e]) return false;
    }
  }
  return !stack.length;
};

//soltution ended w 97%
