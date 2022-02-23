/**
 * @param {number[]} height
 * @return {number}
 * @link https://leetcode.com/problems/container-with-most-water/submissions/
 */

//first medium difficulty problem. not too challenging
var maxArea = function (height) {
  if (height.length === 1) return 0;

  let maxArea = 0;
  let tmp = 0;
  let lowHeight = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    lowHeight = height[left] < height[right] ? height[left] : height[right]; //gets lowest height
    tmp = (right - left) * lowHeight; //gets the area
    console.log(tmp);
    if (tmp > maxArea) {
      maxArea = tmp;
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
