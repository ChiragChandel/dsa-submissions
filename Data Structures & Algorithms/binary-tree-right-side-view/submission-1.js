class Solution {
    rightSideView(root) {
        if(!root) return [];
        let q = [];
        q.push(root);
        let res = [];
        while(q.length){
            let levelSize = q.length;            
            let currLev = [];
            while(levelSize > 0){   
                let node = q.shift();             
                currLev.push(node.val);
                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);
                levelSize--;
            }            
            res.push(currLev[currLev.length - 1]);
        }
        return res;
    }
}
