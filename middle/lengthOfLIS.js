/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = [];
  let max = 0;
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++){
    dp[i] = 1;
    for (let j = 0; j < i; j++){
      if (nums[i] > nums[j]) { // 如果当前值大于前面的值
        // 选或者不选当前值
        dp[i] = Math.max(dp[i], dp[j] + 1); //取当前值和前面的值的最大值
      }
    }
    max = Math.max(max, dp[i]); // 每次都要更新最大值
  }
  return max;

};

// const nums = [10, 9, 2, 5, 3, 7, 101, 18]
// nums = [0,1,0,3,2,3]
const nums = [7,7,7,7,7,7,7]

console.log(lengthOfLIS(nums)) // 4