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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1;
        let curr2 = list2;
        let dummyNode = new ListNode(-1, null);
        let temp = dummyNode;

        while(curr1 && curr2){
            if(curr1.val <= curr2.val){
                temp.next = curr1;
                temp = curr1;
                curr1 = curr1.next;
            }
            else if(curr1.val > curr2.val){
                temp.next = curr2;
                temp = curr2;
                curr2 = curr2.next;
            }
        }  
        if(curr1){
            temp.next = curr1;
        } 
        else{
            temp.next = curr2;
        } 
        return dummyNode.next;
        }
}
