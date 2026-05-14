class Solution {
    goodNodes(root) {
        if(!root) return 0;
        let q = [];
        q.push([root, root.val]);
        let ans = 0;

        while(q.length){
            let [node, maxSoFar] = q.shift();
            if(node.val >= maxSoFar){
                ans++;
            }
            let newMax = Math.max(maxSoFar, node.val);

            if(node.left) q.push([node.left, newMax]);
            if(node.right) q.push([node.right, newMax]);
        }
        return ans;
    }
}
