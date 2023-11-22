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
 * @return {boolean}
 */
var isBalanced = function(root) {
  function getHeight(node) {
          if (node === null) return 0;
          const leftH = getHeight(node.left);
          if (leftH === -1) return -1; // 提前退出，不再递归
          const rightH = getHeight(node.right);
          if (rightH === -1 || Math.abs(leftH - rightH) > 1) return -1;
          return Math.max(leftH, rightH) + 1;
      }
      return getHeight(root) !== -1;
  
  };