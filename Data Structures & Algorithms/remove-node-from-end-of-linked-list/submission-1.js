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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(head.next == null && n == 1) return null;
        if(head == null) return head;

        let p1 = head;
        let count = 0;
        while(count < n){
            p1 = p1.next;
            count++;
        }
        if(p1 == null) return head.next;
        let p2 = head;
        while(p1.next){
            p1 = p1.next;
            p2 = p2.next;
        }
        p2.next = p2.next.next;
        return head;
    }
}
