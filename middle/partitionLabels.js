
var partitionLabels = function(s) {
  const last = [];
  const codePointA = 'a'.codePointAt(0);
  for (let i = 0; i < s.length; i++) {
      //用last记录字母最后出现的位置
      last[s.codePointAt(i) - codePointA] = i;
  }
  const ret = [];
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
      end = Math.max(end, last[s.codePointAt(i) - codePointA]);
      //i==end，start-end之间没有找到比end值更大的，也就是说这一片段的字母都是出现在这一个片段里面
      if (i == end) {
          //先将当前end-start+1加入到ret中，再对start重新赋值
          ret.push(end - start + 1);
          start = end + 1;
      }
  }
  return ret;
};