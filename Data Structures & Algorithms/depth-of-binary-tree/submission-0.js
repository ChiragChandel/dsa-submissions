/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0;
        let maxDepth = 0;
        let st = [{node: root, depth: 1}];

        while(st.length){
            let {node, depth} = st.pop();
            maxDepth = Math.max(maxDepth, depth);
            if(node.left) st.push({node: node.left, depth: depth + 1});
            if(node.right) st.push({node: node.right, depth: depth + 1});
        }

        return maxDepth;
    }
}
