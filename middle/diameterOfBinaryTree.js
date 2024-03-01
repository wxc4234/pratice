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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // let max = 0;
    // let dfs = (node) => {
    //     if (!node) return 0;
    //     let left = dfs(node.left);
    //     let right = dfs(node.right);
    //     max = Math.max(max, left + right);
    //     return Math.max(left, right) + 1;
    // }
    // dfs(root);
  // return max

  let count = 0;
  function dfs(tree) {
    if (!tree) return 0;
    let left = dfs(tree.left);
    let right = dfs(tree.right);
    count = Math.max(count, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return count;
};
let root = [1,2,3,4,5];