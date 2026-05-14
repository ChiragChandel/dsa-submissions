class Solution {
    mergeKLists(lists) {
        if(lists.length == 0) return null;
        let currHead = null;
        for(let i = 0; i < lists.length; i++){
            currHead = this.mergeTwo(currHead, lists[i]);
        }
        return currHead;
    }

    mergeTwo(list1, list2){
        let c1 = list1;
        let c2 = list2;
        let dummy = new ListNode(-1, null);
        let temp = dummy;

        while(c1 && c2){
            if(c1.val <= c2.val){
                temp.next = c1;
                temp = c1;
                c1 = c1.next;
            }
            else{
                temp.next = c2;
                temp = c2;
                c2 = c2.next;
            }
        }
        if(c1){
            temp.next = c1;
        }
        else{
            temp.next = c2;
        }
        return dummy.next;
    }
}
