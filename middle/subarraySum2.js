/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (map.has(sum - k)) { //如果map中存在sum-k，说明存在连续子数组和为k
        count += map.get(sum - k); //累加次数
      }
      if (map.has(sum)) { //如果map中存在sum，次数加1
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1); //不存在sum，次数为1
      }
  }
  return count;
};

const nums = [1, 2, 1,2,1], k = 3;
console.log(subarraySum(nums, k));