/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let roman = "";
  let romanNum = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL":40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I":1
  };
  for (let key in romanNum) {
    while (num >= romanNum[key]) {
      roman += key;
      num -= romanNum[key];
    }
  }
  return roman;
};
var num = 1994;
console.log(intToRoman(num));