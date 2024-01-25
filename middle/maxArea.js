/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  while (left < right) {
    const width = right - left;
    area = Math.max(area, width * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left++;
    else right--;

  }
  return area;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // 49