class Solution {
    reorderList(head) {
        if(head == null || head.next == null){
            return;
        }

        let midNode = this.getMid(head);        
        let c2 = this.reverse(midNode.next);
        midNode.next = null;
        let c1 = head;
        while(c2){
            let f1 = c1.next;
            let f2 = c2.next;
            
            c1.next = c2;
            c2.next = f1;
            
            c1 = f1;
            c2 = f2;
        }
        return head;

    }
    getMid(node){
        let slow = node;
        let fast = node;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    reverse(node){
        let curr = node;
        let prev = null;
        while(curr){
            let front = curr.next;
            curr.next = prev;
            prev = curr;
            curr = front;
        }
        return prev;
    }
}
