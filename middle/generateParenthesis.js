/**
 * @param {number} n
 * @return {string[]}
 */
// 递归实现括号生成
var generateParenthesis = function (n) {
  var res = [];
  var m = n * 2;
  let p = Array(m);// 用于存放括号
  function dfs(i, j) {
    // 如果i === m，说明括号已经放完了，判断是否合法
    if (i === m) {
      res.push(p.join(''));
      return;
    }
    // 如果j > 0，说明已经放了左括号，可以放右括号
    if (j > 0) {
      p[i] = ')';
      dfs(i + 1, j - 1);
    }
    // 如果m - i > j，说明还可以放左括号
    if (m - i > j) {
      p[i] = '(';
      dfs(i + 1, j + 1);
    }
  }
  // 从第一个位置开始放括号
  dfs(0, 0);
  return res;// 返回结果
};
let n = 1;
console.log(generateParenthesis(n))
