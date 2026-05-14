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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;
        let q = [root];
        while(q.length){
            let node = q.shift();

            let temp = node.left;
            node.left = node.right;
            node.right = temp;

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        return root;
    }
}
