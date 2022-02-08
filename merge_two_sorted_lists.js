/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * @link https://leetcode.com/problems/merge-two-sorted-lists/submissions/
 */
//my version failed to found a js solution. I am close, just need to debug and
//study linked lists again. Will redo tmr...

// var mergeTwoLists = function(list1, list2) {
//     if (!list1 || !list2)
//         {
//             return list1 ? list1 : list2;
//         }

//     const head = new ListNode();
//     let tmp = head;

//     while (list1.next && list2.next)
//         {
//             if(list1.val >= list2.val)
//                 {
//                     tmp.next = list2;
//                     tmp = list2;
//                     list2 = list2.next;
//                 }
//             else {
//                 tmp.next = list1;
//                 tmp = list1;
//                 list1 = list1.next
//             }
//         }
//     let remainder  = list1.next === null ? list1 : list2;
//     while (remainder.next)
//         {
//             tmp.next = remainder;
//             tmp = remainder;
//             remainder = remainder.next;
//         }

//     return head.next
// };

var mergeTwoLists = function (list1, list2) {
  const head = new ListNode();

  let previousNode = head;
  let leftNode = list1;
  let rightNode = list2;

  while (leftNode && rightNode) {
    if (leftNode.val < rightNode.val) {
      previousNode.next = leftNode;
      previousNode = leftNode;
      leftNode = leftNode.next;
    } else {
      previousNode.next = rightNode;
      previousNode = rightNode;
      rightNode = rightNode.next;
    }
  }

  // Add any leftover nodes to the list

  while (leftNode) {
    previousNode.next = leftNode;
    previousNode = leftNode;
    leftNode = leftNode.next;
  }
  while (rightNode) {
    previousNode.next = rightNode;
    previousNode = rightNode;
    rightNode = rightNode.next;
  }

  return head.next;
};
