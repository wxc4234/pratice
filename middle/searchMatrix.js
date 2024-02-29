/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  let [row, col] = [matrix.length - 1, 0];
  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) row--;
    else col++;
  }
  return false;
};
let matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
let target = 5;
console.log(searchMatrix(matrix, target)); // true