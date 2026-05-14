class Solution {
    kthSmallest(root, k) {
        this.count = 0;
        this.result = null;
        this.dfs(root, k);
        return this.result;
    }

    dfs(node, k){
        //base case
        if(!node || this.result !== null) return;

        this.dfs(node.left, k);
        
        this.count++;
        if(this.count == k){
            this.result = node.val;
            return;
        }

        this.dfs(node.right, k);
    }
}
