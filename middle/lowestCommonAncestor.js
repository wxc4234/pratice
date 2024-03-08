/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) return root;
  // 寻找 p、q，找到则立刻返回告诉上层节点，找到了
  if (root === p || root === q) return root;

  // 自顶向下检查 p、q 能否在左、右子树中找到（相当于前序遍历寻找 p、q）
  let leftNode = lowestCommonAncestor(root.left, p, q);
  let rightNode = lowestCommonAncestor(root.right, p, q);

  // 自底向上，返回公共祖先
  //  - p、q 都在 右子树中，返回 递归右子树 的结果
  if (leftNode === null && rightNode !== null) return rightNode;
  //  - p、q 都在 左子树中，返回 递左子树 的结果
  else if (rightNode === null && leftNode !== null) return leftNode;
  //  - p、q 没有找到，返回 null
  else if (leftNode === null && rightNode === null) return null;
  //  - p、q 在 左右子树中，直接返回 root 公共祖先
  return root;
};