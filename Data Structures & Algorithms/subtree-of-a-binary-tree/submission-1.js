class Solution {
    isSubtree(root, subRoot) {
        if(!root) return false;

        if(root.val == subRoot.val){
            if(this.isSame(root, subRoot)) return true;
        } 

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);       
    }
    isSame(p, q){
        if(!p && !q) return true;
        if(!p || !q) return false;
        return (p.val == q.val) && this.isSame(p.left, q.left) && this.isSame(p.right, q.right);        
    }
}
