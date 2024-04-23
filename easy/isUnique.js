/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let n = astr.length;
  if (n <= 1) return true;
  let i = 0;
  for (i; i < n; i++){
    for (let j = n - 1; j > i; j--){
      if (astr[i] === astr[j]) {
        return false
      }
    }
  }
  return true
};
// let s = "kzwunahkiz";
let s = "leetcode"
// let s = "abc"

console.log(isUnique(s));