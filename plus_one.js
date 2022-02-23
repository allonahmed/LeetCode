/**
 * @param {number[]} digits
 * @return {number[]}
 * @link https://leetcode.com/problems/plus-one/
 */

//iterate from the end of the array
// if digits[i] is equal to 9, we make change last digit to 0, and digit[i-1] to it's value +1
//(if digit[i-1] doesn't exist, we prepend (unshift) a 1 to the array)
//else we increment last digit by 1
//edge case... last numbers have mulitple 9's ex: 2,3,9,9,9 => we would want 2,4,0,0,0
//
//pseudo:
//loop through array from end, to start
//   if true check if digit[i] is equal to 9
//       if true, change digit[i] to zero
//   else we add 1 to digit[i] and break the loop

//after realized there was another edge case... if the array only consists of 9, we have to prepend a 1 (line 26)

//code
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] === 9 && i === 0) {
      digits[i] = 0;
      digits.unshift(1);
    } else if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      break;
    }
  }

  return digits;
};
