class Solution {
    levelOrder(root) {
        if (!root) return [];
        let q = [];
        let res = [];
        q.push(root);
        
        while (q.length) {
            let currLevelNodes = q.length;
            let level = [];
            while(currLevelNodes > 0){
                let node = q.shift();
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
                level.push(node.val);
                currLevelNodes--;
            }
            res.push(level);
        }
        return res;
    }
}
