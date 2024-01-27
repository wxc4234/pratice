/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let n = nums.length;
  let preSum = new Map(); // key 是前缀和，value 是前缀和的个数
  // base case
  preSum.set(0, 1); // 0 的前缀和出现了 1 次
  let res = 0,
    sum_i = 0;
  for (let i = 0; i < n; i++) { // 穷举 nums 中的每个数
    sum_i += nums[i];
    let sum_j = sum_i - k;
    if (preSum.has(sum_j)) { // 如果前面有这个前缀和，则直接更新答案
      res += preSum.get(sum_j); // sum_j 出现了 preSum.get(sum_j) 次
    }
    preSum.set(sum_i, (preSum.get(sum_i) || 0) + 1); // 记录前缀和个数
  }
  return res;
};

let nums = [1, -1, 0], k = 0;
console.log(subarraySum(nums, k));