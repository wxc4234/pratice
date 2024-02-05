var insert = function(intervals, newInterval) {
  let len = intervals.length
  if(len<=0) return [newInterval]
  let arr=[]//存储新区间
  // 遍历区间列表，比较的同时进行插入
  for(var i=0;i<len;i++){
      // 区间不重叠
      if(intervals[i][1]<newInterval[0]){
          arr.push(intervals[i])
      }
      else if(newInterval[1]<intervals[i][0]){
          arr.push(newInterval,...intervals.slice(i))
          break;
      }
      // 区间发生重叠
      else{
          newInterval[0]=Math.min(intervals[i][0],newInterval[0])
          newInterval[1]=Math.max(intervals[i][1],newInterval[1])
      }
  }
  if(
      intervals[len-1][1]<newInterval[0]||
      (newInterval[0]<=intervals[len-1][0]&&newInterval[1]>=intervals[len-1][1])
  ){
       arr.push(newInterval)
  }
  return arr
};