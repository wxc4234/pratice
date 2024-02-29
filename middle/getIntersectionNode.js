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
var getListLen = function(head) {
  let len = 0, cur = head;
  while(cur) {
     len++;
     cur = cur.next;
  }
  return len;
}
var getIntersectionNode = function(headA, headB) {
  let curA = headA,curB = headB,
      lenA = getListLen(headA),
      lenB = getListLen(headB);
  if(lenA < lenB) { //如果A链表比B链表短，交换A和B
      [curA, curB] = [curB, curA]; // 保证curA是长的那个链表
      [lenA, lenB] = [lenB, lenA]; // 保证lenA是长的那个链表
  }
  let i = lenA - lenB; // 让curA先走i步
  while(i-- > 0) {
      curA = curA.next
  }
  while(curA && curA !== curB) {
      curA = curA.next;
      curB = curB.next;
  }
  return curA;
};
