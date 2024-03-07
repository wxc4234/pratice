var pathSum = function(root, targetSum) {
  if(!root) return 0
  let curNode = dfs(root,targetSum)
  let leftNode = pathSum(root.left,targetSum)
  let rightNode = pathSum(root.right,targetSum)
  return curNode+leftNode+rightNode
}

const dfs = function(root,targetSum){
  if(!root) return 0
  let res = 0
  if(root.val===targetSum) res++
  res+=dfs(root.left,targetSum-root.val)
  res+=dfs(root.right,targetSum-root.val)
  return res
}
