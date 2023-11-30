/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //最后两者进行对比
      s=s.replace(/[^a-zA-Z0-9]/g,"").replace(/\s/g,"").toLowerCase();
      return s===[...s].reverse().join("")
 };