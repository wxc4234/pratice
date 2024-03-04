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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let stack = [];
    let node = root;
    while (node || stack.length) {
      while (node) {
        stack.push(node); // 将当前节点入栈，然后再将当前节点设置为左节点，直到左节点为空
        node = node.left;
      }
      node = stack.pop(); // 当左节点为空时，将栈顶元素出栈，然后将当前节点设置为右节点
      k--; // 每次出栈，k减1
      if (k === 0) {
        console.log(node.val);
        return node.val;
      }
      node = node.right;
    }
    return -1;
}
  ;
let root = { val: 3, left: { val: 1, left: null, right: { val: 2, left: null, right: null } }, right: { val: 4, left: null, right: null } };
let k = 2;
kthSmallest(root, k);