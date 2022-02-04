/**
 * @param {string[]} strs
 * @return {string}
    @link https://leetcode.com/problems/longest-common-prefix/submissions/
 */

//96% PROOF REad your code... wasted 10 minutes for being dumb
//prolly can find a better solution in future
var longestCommonPrefix = function (strs) {
  let results = "";
  let prefix = "";

  for (let i = 0; i < strs[0].length; i += 1) {
    results = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (results != strs[j].charAt(i)) {
        return prefix;
      }
    }
    prefix += results;
  }
  return prefix;
};
