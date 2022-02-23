/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
 */

//99% BOOM
var twoSum = function (numbers, target) {
  numbers.unshift("");

  let right = numbers.length - 1;
  for (let left = 1; left < numbers.length; left += 1) {
    if (numbers[left] + numbers[right] > target) {
      right--;
      left--;
    } else if (numbers[left] + numbers[right] === target) {
      return [
        numbers.indexOf(numbers[left]),
        numbers.lastIndexOf(numbers[right])
      ];
    }
  }
  return [];
};
