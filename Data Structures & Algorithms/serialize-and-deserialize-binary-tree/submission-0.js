class Codec {
    serialize(root){
    let result = [];
    
    function dfs(node){
        if(node == null){
            result.push(null);
            return;
        }
        
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return JSON.stringify(result);
}

 deserialize(result){
    let data = JSON.parse(result);
    let index = 0;
    
    function dfs(){
        if(data[index] == null){
            index++;
            return null;
        }
        
        let node = new TreeNode(data[index]);
        index++;
        
        node.left = dfs();
        node.right = dfs();
        
        return node;
    }
    return dfs();
}
}
