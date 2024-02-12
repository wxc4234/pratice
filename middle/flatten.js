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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return

  // 先把根节点的左右子树全部变成展开后的形式，保留右子树
  let right = root.right
  flatten(root.left)
  flatten(right)

  // 将展开后的左子树放到根节点的右侧，并将根节点左侧置空
  root.right = root.left
  root.left = null

  // 走到左子树的最右节点，拼接保留后的右子树
  let p = root
  while (p.right !== null) {
      p = p.right
  }
  p.right = right
};