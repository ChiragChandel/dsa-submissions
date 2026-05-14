class Solution {
    lowestCommonAncestor(root, p, q) {
        if(!root) return null;
        let curr = root.val;

        if(p.val < curr && q.val < curr){
            return this.lowestCommonAncestor(root.left, p, q);
        }
        if(p.val > curr && q.val > curr){
            return this.lowestCommonAncestor(root.right, p, q);
        }
        return root;
    }
}
