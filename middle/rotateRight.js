/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || k == 0 || !head.next) {
      return head
  }
  // 获取长度
  let l = 1
  let tmp = head
  while(tmp.next) {
      l++
      tmp = tmp.next
  }
  // 向右移动了k个
  k %= l

  if (k == 0) {
      return head
  }

  let node1 = new ListNode(-1)
  let node2 = new ListNode(-2)

  // 节点1：（l - k）
  tmp = head
  node1.next = tmp
  let cnt = 1
  while (cnt < l - k) {
      tmp = tmp.next
      cnt++
  }
  let fr = tmp.next
  node2.next = fr
  tmp.next = null

  // 节点2：（结尾为null时，弥补上node1.next）
  while (fr.next) {
      fr = fr.next
  }
  fr.next = node1.next

  return node2.next
};