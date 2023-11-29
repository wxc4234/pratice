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
// 广度优先搜索
var minDepth = function(root) {
  if (!root) {
         return 0;
     }
     const q = [[root, 1]];
     while (q.length) {
         const [n, l] = q.shift();
         if (!n.left && !n.right) {
             return l;
         }
         if (n.left) q.push([n.left, l + 1]);
         if (n.right) q.push([n.right, l + 1]);
     }
};
//  深度优先搜索
var minDepth = function(root) {
  if (!root) {
         return 0;
     }
     if (!root.left && !root.right) {
         return 1;
     }
     let min_depth = Number.MAX_SAFE_INTEGER;
     if (root.left) {
         min_depth = Math.min(minDepth(root.left), min_depth);
     }
     if (root.right) {
         min_depth = Math.min(minDepth(root.right), min_depth);
     }
     return min_depth + 1;
};