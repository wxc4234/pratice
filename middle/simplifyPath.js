var simplifyPath = function(path) {
  let arr = path.split(/\/+/) // 以 / 为分隔符，分割字符串
  let n = arr.length
  let res = []
  for (let i = 0; i < n; i++) {
      if (arr[i] == '' || arr[i] == '.') { // 跳过空字符串和 .
          continue
      }
      if (arr[i] == '..') { // 返回上一级目录
          res.pop() // 弹出最后一个元素
      } else {
          res.push(arr[i]) // 将当前元素添加到数组末尾
      }
  }
  return '/' + res.join('/') // 以 / 为连接符，连接字符串
};