/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  function dfs(root,n){
      if(!root) return
      if(res.length === n){
          res.push(root.val)
    }
    dfs(root.right, n + 1)
    dfs(root.left, n + 1)
  }
  dfs(root,0)
  return res
};