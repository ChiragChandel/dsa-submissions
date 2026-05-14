class Solution {
    isValidBST(root) {       
        return this.recur(root, -Infinity, Infinity);    
    }  

    recur(node, minVal, maxVal){
        if(!node) return true;

        if(node.val <= minVal || node.val >= maxVal){
            return false;
        }

        return this.recur(node.left, minVal, node.val) && this.recur(node.right, node.val, maxVal);
    }      
}
