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
     * @return {boolean}
     */
    isBalanced(root) {

        function recur(node){
            //base case
            if(!node){
                return 0;
            }
            let left = recur(node.left);
            let right = recur(node.right);
            if(left == -1 || right == -1) return - 1;
            if(Math.abs(left - right) > 1){
                return -1;
            }
            return 1 + Math.max(left, right);
        }
        let height = recur(root);
        return height == -1 ? false : true;
    }
}
