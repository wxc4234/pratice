var rotate = function (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = x; y < matrix.length; y++) {
      if (x === y) continue;

      // swap without third party
      matrix[x][y] = matrix[x][y] ^ matrix[y][x];
      matrix[y][x] = matrix[x][y] ^ matrix[y][x];
      matrix[x][y] = matrix[x][y] ^ matrix[y][x];
      // ^ 是异或运算符，异或运算符是一个二元运算符，它的返回值是两个操作数的每一位进行异或运算的结果。
    }
  }

  for (let x = 0; x < matrix.length; x++) {
    matrix[x].reverse(); //reverse 是反转数组，不是翻转数组
    // reverse() 是一个数组方法，它会将数组中元素的顺序反转。
  }
};