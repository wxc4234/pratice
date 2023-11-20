/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len=digits.length-1;
    for(len;len>=0;len--){
        digits[len]++;
        digits[len] %= 10;
        if(digits[len]==0){
            if(len===0){
                digits.unshift(1);
            }
        }else{
            return digits;
        }

    }
    return digits;
   
};
let digits=[9];

console.log(plusOne(digits));