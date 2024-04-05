/**
 * @param {number[]} prices
 * @return {number}
 */
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  // 上面的代码的意思是创建一个二维数组，第一维表示天数，第二维表示是否持有股票，0表示不持有，1表示持有
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  // 上面的代码的意思是第一天不持有股票，利润为0，第一天持有股票，利润为-prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  // 上面的代码的意思是遍历每一天，计算每一天不持有股票和持有股票的利润
  return dp[prices.length - 1][0];
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 7