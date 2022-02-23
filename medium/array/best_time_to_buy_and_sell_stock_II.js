/**
 * @param {number[]} prices
 * @return {number}
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/
 */
//easy problem
//did mock int w Darren

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    profit += prices[i + 1] - prices[i] <= 0 ? 0 : prices[i + 1] - prices[i];
  }
  return profit;
};
