/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = [];
  let cur = head;
  if(!cur) return true;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  if(arr.length === 1) return true;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
    if (left >= right) {
      return true;
    }
  }
};
let head = [1, 2, 2, 1];
console.log(isPalindrome(head)); // true