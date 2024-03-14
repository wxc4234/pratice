/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0, right = nums.length - 1;
      while(left < right){
          let middle = left + ~~((right - left) / 2);
          if(nums[middle] > nums[right]) left = middle + 1;
          else if(nums[middle] < nums[right]) right = middle;
          else right--;
      }
      return nums[left]
  };