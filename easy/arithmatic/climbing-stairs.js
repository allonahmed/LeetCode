/**
 * @param {number} n
 * @return {number}
 @link https://leetcode.com/problems/climbing-stairs/submissions/
 */

//brightside, was happy i figured out two algorithms on how to solve it,
//even though my recursive algorithm sucked. But problem solving is going ok
//problem is i need to plan better and think through before coding and writing
//buggy garbage. problem took 30 minutes. should have taken 15

//max 45 steps. n should be a whole number (int)

//n = 4 step:
//1. 1 1 1 1
//2. 1 1 2
//3. 1 2 1
//4. 2 1 1
//5. 2 2

//n = 5 steps:
//1. 1 1 1 1 1
//2. 1 1 1 2
//3. 1 1 2 1
//4. 1 2 1 1
//5. 2 1 1 1
//6. 1 2 2
//7. 2 1 2
//8. 2 2 1

//we know that the n will have n-1 + n-2 combinations
//so the recursive method works, but does not work for high input numbers

var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

//so we have to solve with a more dynamic approach:
//new approach is to use an array, and store all the steps for each index of the array;
var climbStairs = function (n) {
  let array = [0, 1, 2];
  for (let i = 3; i <= n; i += 1) {
    array.push(array[i - 2] + array[i - 1]);
  }

  return array[n];
};
