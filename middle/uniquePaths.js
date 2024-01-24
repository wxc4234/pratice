var uniquePaths = function(m, n) {
  let dp = Array.from({
    length: m
  }, x => Array.from({
    length: n
  }))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0 || i === 0 && j !== 0 || i !== 0 && j === 0) { // 边界条件

        dp[i][j] = 1
      } else if (i !== 0 && j !== 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
};

let res = uniquePaths(3, 7)