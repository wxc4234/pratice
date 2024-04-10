/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let rows = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows[i] = "";
    }

    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }

    let result = "";
    for (let i = 0; i < rows.length; i++) {
        result += rows[i];
    }

    return result;
};

let s = "PAYPALISHIRING", numRows = 3;
console.log(convert(s, numRows)); // "PAHNAPLSIIGYIR"