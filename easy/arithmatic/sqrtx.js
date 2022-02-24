/**
 * @param {number} x
 * @return {number}
 * @link https://leetcode.com/problems/sqrtx/submissions/
 */

//return square root of x
//assume x is a positive integer
//cannot use built in exp functions

//the question: how to get the square root without using exp i.e x^1/2

//algo:
//i would iterate through all integers starting at 1
//then find i * i (i^2)
//the compare i to x:
// if i * i < x and (i +1) * (i+1) > x:
// we found out square root value and retrun i;
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  if (x === 2) {
    return 1;
  }
  for (let i = 0; i < x / 2; i += 1) {
    if (i * i <= x && (i + 1) * (i + 1) >= x) {
      if ((i + 1) * (i + 1) === x) {
        return i + 1;
      }
      return i;
    }
  }
};

//better solution:
var mySqrt = function (x) {
  let results = 0;
  for (let i = 0; i * i <= x; i += 1) {
    results = i;
  }
  return results;
};
