/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  let map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], map.has(s1[i]) ? map.get(s1[i]) + 1 : 1);
  }
  let count = map.size;
  let start = 0, end = 0;
  while (end < s2.length) {
    if (map.has(s2[end])) {
      map.set(s2[end], map.get(s2[end]) - 1);
      if (map.get(s2[end]) == 0) count--;
    }
    end++;
    while (count == 0) {
      if (map.has(s2[start])) {
        map.set(s2[start], map.get(s2[start]) + 1);
        if (map.get(s2[start]) > 0) count++;
      }
      if (end - start == s1.length) return true;
      start++;
    }
  }
  return false;
};

let s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));