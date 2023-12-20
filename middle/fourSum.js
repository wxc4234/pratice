/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length;
      if(len < 4) return [];
      nums.sort((a, b) => a - b);
      const res = [];
      for(let i = 0; i < len - 3; i++) {
          // 去重i
          if(i > 0 && nums[i] === nums[i - 1]) continue;
          for(let j = i + 1; j < len - 2; j++) {
              // 去重j
              if(j > i + 1 && nums[j] === nums[j - 1]) continue;
              let l = j + 1, r = len - 1;
              while(l < r) {
                  const sum = nums[i] + nums[j] + nums[l] + nums[r];
                  if(sum < target) { l++; continue}
                  if(sum > target) { r--; continue}
                  res.push([nums[i], nums[j], nums[l], nums[r]]);
                  while(l < r && nums[l] === nums[++l]);
                  while(l < r && nums[r] === nums[--r]);
              }
          }
      }
      return res;
};

// 这段代码是用来解决“四数之和”问题的。给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
// 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 首先，我们定义了一个函数 fourSum，它接受两个参数：一个整数数组 nums 和一个目标值 target。

// 在函数体中，首先检查 nums 的长度是否小于 4，如果是，那么直接返回空数组，因为不可能找到四个数。

// 然后，对 nums 进行排序。这是因为我们将使用双指针技术，而这种技术在处理这类问题时需要输入数组是有序的。

// 接着，定义一个空数组 res，用于存储所有满足条件的四元组。

// 然后，使用两层循环遍历数组中的每个元素。外层循环变量 i 从 0 开始，内层循环变量 j 从 i + 1 开始。
// 在内层循环中，定义两个指针 l 和 r，分别指向当前子数组的开始和结束位置。

// 在内层循环中，首先计算四个数的和 sum。如果 sum 小于 target，那么增加 l 的值；如果 sum 大于 target，
// 那么减小 r 的值；如果 sum 等于 target，那么将这四个数添加到 res 中，并移动 l 和 r 以跳过所有重复的元素。