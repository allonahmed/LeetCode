/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.com/problems/two-sum/submissions/
 */

//my response... only 31%...
//had troubles with test case in which the target added up to two of the same numbers, it will return the indeces for the first number twice
//solution was to use lastIndexOf() array method
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i+=1){
        if (nums.includes(target - nums[i]) && nums.indexOf(target-nums[i])!== i)
            {
                return [nums.indexOf(nums[i]), nums.lastIndexOf(target-nums[i])]
            }
    }
};