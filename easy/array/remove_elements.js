/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @link https://leetcode.com/problems/remove-element/submissions/
 */

//easy problem took 7-8 minutes
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
