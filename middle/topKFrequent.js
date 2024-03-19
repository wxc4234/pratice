/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach(n => {
      map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  // 先将 map 转化为 Array
  const list = Array.from(map).sort((a, b) => b[1] - a[1]);
  // 只取元素值
  return list.slice(0, k).map(n => n[0]);
};