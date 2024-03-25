/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(nums[i], max * nums[i], min * nums[i]);
    min = Math.min(nums[i], temp * nums[i], min * nums[i]);
    result = Math.max(result, max);
  }
  return result;
};

// 首先定义两个变量max和min，分别表示以当前元素为结尾的子数组的最大乘积和最小乘积。
// 然后遍历数组，对于每一个元素，我们都有三种选择：
// 1. 以当前元素为结尾的子数组只包含当前元素；
// 2. 以当前元素为结尾的子数组包含当前元素和之前的元素；
// 3. 以当前元素为结尾的子数组包含当前元素和之前的元素，并且之前的元素为负数。
// 因此，我们可以得到max = Math.max(nums[i], max * nums[i], min * nums[i])
// 和min = Math.min(nums[i], max * nums[i], min * nums[i])。
// 最后，我们返回result = Math.max(result, max)。


const nums = [2, 3, -2, 4]
console.log(maxProduct(nums)) // 6