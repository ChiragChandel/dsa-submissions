class Solution {
    buildTree(preorder, inorder) {

        if(preorder.length == 0 || inorder.length == 0) return null;

        let rootVal = preorder[0];
        let root = new TreeNode(rootVal);
        let rootInorder = inorder.indexOf(rootVal);

        root.left = this.buildTree(preorder.slice(1, 1 + rootInorder), inorder.slice(0, rootInorder));
        root.right = this.buildTree(preorder.slice(1 + rootInorder), inorder.slice(1 + rootInorder));

        return root;
    }
};
