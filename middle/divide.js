// if (divisor === 0) return Infinity;
// if (dividend === 0) return 0;
// if (dividend === -2147483648 && divisor === -1) return 2147483647;

// let res = 0;
// let flag = "";
// if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
//   flag = "-";
// }
// dividend = Math.abs(dividend);
// divisor = Math.abs(divisor);

// while (dividend >= divisor) {
//   let temp = divisor,
//     m = 1;
//   while (temp <= dividend >> 1) {
//     // 位运算模拟乘法，撑到最大。防止溢出
//     temp <<= 1;
//     m <<= 1;
//   }
//   dividend -= temp;
//   res += m;
// }

// return parseInt(flag + res);

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var result = parseInt(dividend / divisor)
      if (result >= Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
          return (Math.pow(2, 31) - 1);
      } else {
        return result
      }
      return parseInt(flag + res);
  };
