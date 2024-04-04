/**
 * @param {number[]} nums
 * @return {number}
 */
// 请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
var removeDuplicates = function (nums) {
    let n = nums.length;
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};
let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));