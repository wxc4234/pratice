/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p == null && q == null) 
      return true;
  if(p == null || q == null) 
      return false;
  if(p.val != q.val) 
      return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
var p= [1,2,1]
var q= [1,1,2]
console.log(isSameTree(p, q));