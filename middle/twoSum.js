/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if (numbers.length < 2) return [];
  let left = 0;
  let right = numbers.length - 1;
  let n = numbers.length
  while (n > 0) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    }else{
      left++;
    }
    n--;
  }
  return [];
};

const numbers = [2, 7, 11, 15], target = 9
console.log(twoSum(numbers, target));