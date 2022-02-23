/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.com/problems/maximum-subarray/submissions/
 */

//pretty hard problem to solve but using math.max was huge
//took about ten minutes
 var maxSubArray = function(nums) {
    let max = -Infinity
    let sum = 0;
    
    for (let i = 0; i < nums.length; i+=1)
        {
            sum+=nums[i];
            max = Math.max(sum,max);
            if (sum < 0){
                sum = 0;
            }
        }
    
    return max;
};