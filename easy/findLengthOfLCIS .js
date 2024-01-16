
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 0) return 0;
  const n = nums.length;
  let left = 0, right = 1;
  let globalMaxLen = 1, maxLen = 1;
  while (right < n) {
      if (nums[right] > nums[left]) maxLen++;
      else {
          maxLen = 1;
      }
      left++;
      right++;
      globalMaxLen = Math.max(globalMaxLen, maxLen);
  }
  return globalMaxLen;
};

