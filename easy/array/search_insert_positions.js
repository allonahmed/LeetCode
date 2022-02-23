
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode.com/problems/search-insert-position/submissions/

 */

//sorted distinct array
//target value
//return index of target in the array if it is found... otherwise return the index of the place it would be if it was in the array
//remember this is a sorted array so the target will be i > target < i + 1

//steps we would have two starting points, the start and the beginning

var searchInsert = function(nums, target) {
    
    if (nums.includes(target)){
        return nums.indexOf(target);
    }
    else {
        if (target < nums[0]) return 0;
        if (target > nums[nums.length-1]) return nums.length;
        for (let i = 0; i < nums.length; i+=1)
            {
                if (target > nums[i] && target < nums[i+1])
                    {
                        return i+1;
                    }
            }
    }
    
};