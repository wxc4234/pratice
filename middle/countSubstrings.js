/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++){
//     let s1 = "", s2 = ""
//     for (let j = i; j < s.length; j++){
//       s1 = s1 + s[j]
//       s2 = s[j] + s2
//       if (s1 === s2){
//         count++
//       }
//     }
//   }
//   return count;
// };
var s = "abc"
console.log(countSubstrings(s))
// 先使用双指针 i 和 j 枚举所有子串的起点和终点，
// 同时分别按顺序和逆序累加所有遍历过的字符得到字符串 s1 和 s2，
// 判断是否回文只需对 s1 和 s2 判等即可

var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      for (let l = i, r = i; l >= 0 && s[l] === s[r]; l--, r++) count++;
      for (let l = i, r = i + 1; l >= 0 && s[l] === s[r]; l--, r++) count++;
  }
  return count;
};


// 枚举所有可能的回文中心 s[i] 或 s[i]、s[i + 1]，
// 若回文子串长度为奇数则其中心为 s[i]，
// 回文子串长度为偶数则其中心为 s[i]、s[i + 1]；
// 以中心向左右两边扩展，即左边界 l 减一右边界 r 加1，
// 如果 s[l] 与 s[r] 相等则回文数加1。
