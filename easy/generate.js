/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let outArray=[]
      for(let i=0;i<numRows;i++){
          outArray.push(new Array(i+1).fill(1));
          for(let j=1;j<=i-1;j++){
             outArray[i][j]=outArray[i-1][j-1]+outArray[i-1][j];
          }
      }
      return outArray;
  
  };