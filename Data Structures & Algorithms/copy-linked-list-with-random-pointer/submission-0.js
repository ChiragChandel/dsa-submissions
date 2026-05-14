// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map();
        let curr = head;
        let dummy = new Node();
        let curr2 = dummy;

        while(curr){
            curr2.next = new Node(curr.val);
            curr2 = curr2.next;
            map.set(curr, curr2);
            curr = curr.next;
        }
        let curr3 = dummy.next;
        let currOld = head;
        while(curr3){
            curr3.random = currOld.random ? map.get(currOld.random) : null;
            curr3 = curr3.next;
            currOld = currOld.next;
        }
        return dummy.next;
    }
}
