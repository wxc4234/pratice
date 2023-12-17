//相交链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p=headA,q=headB
  while (p != null || q != null) {
    if (p == q) return p;
    p = p.next
    q = q.next
    if(p==null&&q==null){
      return null
    } else {
      if (p == null) {
        p = headB
      }
      if (q == null) {
        q = headA
      }
    }
  }
  return null
};
listA = [4, 1, 8, 4, 5]
listB = [5, 0, 1, 8, 4, 5]
console.log(getIntersectionNode(listA, listB));

// 首先，我们创建两个指针 p 和 q，分别指向 headA 和 headB。然后我们进入一个循环，只要 p 或 q 中的任何一个不为 null，循环就会继续。

// 在循环中，我们首先检查 p 和 q 是否相等。如果它们相等，那么我们找到了交点，返回 p 或 q。

// 如果 p 和 q 不相等，我们就将 p 和 q 向前移动一步，即 p = p.next 和 q = q.next。

// 然后，我们检查 p 和 q 是否都为 null。如果是，那么这两个链表没有交点，我们返回 null。

// 如果 p 和 q 不都为 null，我们就检查 p 和 q 中的每一个是否为 null。如果 p 为 null，我们就将 p 设置为 headB，即让 p 从 headB 开始遍历。同样，如果 q 为 null，我们就将 q 设置为 headA，即让 q 从 headA 开始遍历。这样，我们就可以保证 p 和 q 都会遍历完整个链表。

// 最后，如果循环结束还没有找到交点，我们就返回 null。

// 这个函数的主要思想是，通过让 p 和 q 分别遍历两个链表，如果有交点，它们最终会在交点处相遇。如果没有交点，它们最终都会变为 null。

