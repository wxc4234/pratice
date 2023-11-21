/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  // 因为涉及到递归，所以必然会有数组为空的情况
     if(!nums.length) {
         return null;
     }
 
     // 找到序列中点：
     const headIndex = Math.floor(nums.length / 2);
 
     // 实例化节点头部
     const head = new TreeNode(nums[headIndex]);
     let temp = head;
     let left = headIndex - 1;
     let right = headIndex + 1;
     // 因为是有序升序列表，则当前头部索引的左侧应该都在树的左子树，同理右子树
     if(left >=0) {
         // 左侧有节点，对左侧节点递归，形成左子树
         head.left = sortedArrayToBST(nums.slice(0, headIndex));
     }
     if(right < nums.length) {
         // 右侧有节点，对右侧节点递归，形成右子树
         head.right = sortedArrayToBST(nums.slice(right));
     }
     // 返回节点
     return head;
 
 };