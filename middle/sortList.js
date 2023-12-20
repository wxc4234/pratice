/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 排序链表的实现
var sortList = function(head) {
  // let arr = [];
  // let fast = head;
  // if (!head) return head;
  // while (fast) {
  //   arr.push(fast.val);
  //   fast = fast.next;
  // }
  // arr.sort((a, b) => a - b);
  // fast = head;
  // while (fast) {
  //   fast.val = arr.shift();
  //   fast = fast.next;
  // }
  // return head;
  // 以上代码是将链表转换为数组，然后对数组进行排序，最后再将数组转换为链表
  // 缺点是时间复杂度为O(nlogn)，空间复杂度为O(n)，不符合题目要求

  // 以下代码是归并排序的实现
  var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let slow = head, fast = head.next;
    // 快慢指针找到链表的中点
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = slow.next;// 保存链表的后半部分
    slow.next = null;// 断开链表
    let left = sortList(head);// 递归排序前半部分
    let right = sortList(temp);// 递归排序后半部分
    let h = new ListNode(0);// 创建一个新的链表头
    let res = h;
    // 合并两个有序链表
    while (left !== null && right !== null) {
        if (left.val < right.val) {// 比较两个链表头的值，将较小的值添加到新链表的尾部
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;
    }
    h.next = left !== null ? left : right;// 将剩余的链表连接到新链表的尾部
    return res.next;
}
};
var head = [4, 3, 2, 3];
console.log(sortList(head));
// 首先，检查链表是否为空或只有一个元素，如果是，直接返回该链表，因为空链表或只有一个元素的链表已经是排序好的。

// 使用快慢指针法找到链表的中点。慢指针每次移动一步，快指针每次移动两步。当快指针到达链表的末尾时，慢指针就位于链表的中点。

// 将链表从中点处断开，形成两个独立的链表。

// 对这两个链表分别进行排序。这是一个递归的过程，直到链表的长度为1或0。

// 将两个已排序的链表合并成一个排序的链表。创建一个新的链表头，然后比较两个链表头的值，将较小的值添加到新链表的尾部，然后移动较小值的链表的头到下一个节点。重复这个过程，直到两个链表都为空。

// 返回排序后的链表。