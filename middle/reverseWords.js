/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    let reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== "") {
            reversedWords.push(words[i]);
        }
    }
    return reversedWords.join(" ");
};

let s = "the sky is blue";
console.log(reverseWords(s)); // "blue is sky the"