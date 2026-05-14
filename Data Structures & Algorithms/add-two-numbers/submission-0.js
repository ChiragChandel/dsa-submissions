/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        while(l1 != null || l2 != null || carry != 0){
            let x = 0;
            if(l1 != null){
                x = l1.val;
            }
            let y = 0;
            if(l2 != null){
                y = l2.val;
            }
            let sum = x + y + carry;
            carry = Math.floor(sum / 10);
            let node = new ListNode(sum % 10);
            curr.next = node;
            curr = curr.next;

            if(l1 != null){
                l1 = l1.next;
            }
            if(l2 != null){
                l2 = l2.next;
            }
        }
        return dummy.next;
    }
}
