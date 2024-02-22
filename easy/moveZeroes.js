/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let n = nums.length - 1;
  for (let i = 0; i <= n; i++){
    if (nums[i] === 0) {
      nums.splice(i, 1); //splice是删除数组元素的方法，此处是删除第i个元素，删除后数组长度减一
      nums.push(0); //push是在数组末尾添加元素，此处是添加0
      n--; //删除一个元素后，数组长度减一
      i--; //删除一个元素后，i要减一，因为数组长度减一，i也要减一
    }
  }
  return nums;
};

const nums = [0,1,1];
console.log(moveZeroes(nums)); // [1, 3, 12, 0, 0]
