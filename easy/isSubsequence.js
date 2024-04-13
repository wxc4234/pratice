/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    let sIndex = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[sIndex]) {
            sIndex++;
            if (sIndex === s.length) return true;
        }
    }
    return false;
};

let s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t)); // true