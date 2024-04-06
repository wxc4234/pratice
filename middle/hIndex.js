/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
  let bucket = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (citations[i] >= n) {
            bucket[n]++;
        } else {
          bucket[citations[i]]++;
          // 表示引用次数为i的论文有多少篇
        }
    }
    let count = 0;
    for (let i = n; i >= 0; i--) {
      count += bucket[i];
      // 表示引用次数大于等于i的论文有多少篇
        if (count >= i) {
            return i;
        }
    }
    return 0;
};

let citations = [3, 4, 6, 3, 5];
console.log(hIndex(citations));