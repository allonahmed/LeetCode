/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
 */

//this problem was garbage...
// super easy to solve in about 100 ways but what they wanted for output was stupid
//took 25 minutes (should have been 5)
var removeDuplicates = function (nums) {
  let set = new Set(nums);
  nums.length = 0;
  nums.push(...set.values());

  return set.size;
};
