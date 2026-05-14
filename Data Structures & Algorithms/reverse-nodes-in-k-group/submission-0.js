class Solution {
    reverseKGroup(head, k) {
        if (!head || k === 1) return head;

        let dummy = new ListNode(0);
        dummy.next = head;
        let groupPrev = dummy;

        while (true) {

            let kth = this.calcKth(groupPrev.next, k);   // (1)We find the kth node from the start of this group.
            if (!kth) break;

            let groupNext = kth.next;  // (2)We store the node after the group we are going to reverse.
                                       // It’s needed to reconnect later.
            let start = groupPrev.next;  // (3) start is the first node of the group BEFORE reversing.

            let newHead = this.reverseList(start, groupNext);  // (4)Reverse from start → before groupNext (exclusive).

            groupPrev.next = newHead;  // (5)Connect the left side of list to the reversed group.
            start.next = groupNext; // (6)start was the old head (1). Now it becomes tail of reversed group.
                                    // So connect it to node after the group.
            groupPrev = start; // (7)Move pointer to tail of the reversed group, ready to process the next k group.
        }

        return dummy.next;
    }

    calcKth(node, k) {
        let count = 1;
        while (node && count < k) {
            node = node.next;
            count++;
        }
        return node;
    }

    reverseList(start, end) {
        let prev = null;
        let curr = start;
        while (curr !== end) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
