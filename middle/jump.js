/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let len = nums.length;
  let steps = 0;
  let end = 0;
  let maxposition = 0;
  for (let i = 0; i < len - 1; i++) {
      maxposition = Math.max(maxposition, i+nums[i]);

      if (i == end) {
          end = maxposition;
          steps++
          if (maxposition >= len - 1) {
              break;
          }
      }
  }
  return steps;
};