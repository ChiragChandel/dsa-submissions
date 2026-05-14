class Solution {
    maxPathSum(root) {
        this.maxSum = -Infinity;
        this.solve(root);
        return this.maxSum;
    }

    solve(root) {
        if (root === null) return 0;

        // Ignore negative contributions
        let l = Math.max(0, this.solve(root.left));
        let r = Math.max(0, this.solve(root.right));

        // Case 1: path passes through current node
        let niche_hi_ans = l + r + root.val;

        // Update global maximum
        this.maxSum = Math.max(this.maxSum, niche_hi_ans);

        // Return best downward path
        return root.val + Math.max(l, r);
    }
}
