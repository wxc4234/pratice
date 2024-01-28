/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let count = 0;
  if (nums.length < 2) return count;
  let map = new Map();
  map.set(0, -1);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count--;
    else count++;
    if (map.has(count)) {
      max = Math.max(max, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return max;
};
let nums = [0, 1, 0];
console.log(findMaxLength(nums));