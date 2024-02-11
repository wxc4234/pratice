var pathSum = function(root, targetSum) {
  let res = []
  function dfs(node, path, sum) {
      if (!node) {
          return false
      }
      sum += node.val
      if (sum == targetSum && !node.left && !node.right) {
          path.push(node.val)
          res.push([...path])
          path.pop()
          return true
      }
      path.push(node.val)
      dfs(node.left, path, sum)
      dfs(node.right, path, sum)
      sum -= path.pop()
  }
  dfs(root, [], 0)
  return res
};