var partition = function(head, x) {
  if (head === null) return null
  let p = slow = new ListNode(0), fast = head.next
  slow.next = head
  while (fast) {
      if (slow.next.val < x) {
          slow = slow.next
          head = fast
      } else if (fast.val < x) {
          head.next = fast.next
          fast.next = slow.next
          slow = slow.next = fast
      } else head = fast
      fast = head.next
  }
  return p.next
};