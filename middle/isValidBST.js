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
// var isValidBST = function (root) {
//     let stack = [];
//     let inorder = -Infinity; //Infinity 是一个数值，表示无穷大。它在比较中被用作一个极大的数值。 -Infinity 是一个数值，表示负无穷大。它在比较中被用作一个极小的数值。
//     while (stack.length || root !== null) {
//         while (root !== null) {
//             stack.push(root); //将root压入栈 push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
//             root = root.left;
//         }
//         root = stack.pop(); //pop() 方法用于删除并返回数组的最后一个元素。
//         if (root.val <= inorder) return false;
//         inorder = root.val;
//         root = root.right;
//     }
//     return true;
// };

// 递归实现
var isValidBST = function (root) {
    const helper = (node, lower, upper) => {
        if (node === null) return true;
        if (node.val <= lower || node.val >= upper) return false;
        return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
  }
    return helper(root, -Infinity, Infinity);
};
let root = { val: 5, left: { val: 4, left: null, right: null }, right: { val: 6, left: { val:3, left: null,right:null}, right: { val: 7, left: null, right: null } } }
console.log(isValidBST(root));