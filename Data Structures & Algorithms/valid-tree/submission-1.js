class Solution {
    validTree(n, edges) {
        let vis = Array(n).fill(0);
        let adj = Array(n)
            .fill(0)
            .map(() => []);

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        function dfs(node, parent) {
            vis[node] = 1;

            for (let nbr of adj[node]) {
                if (nbr == parent) {
                    continue;
                }
                if (vis[nbr] == 1) {
                    return false;
                }
                if (!dfs(nbr, node)) {
                    return false;
                }
            }
            return true;
        }
        if (!dfs(0, -1)) {
            return false;
        }

        for (let val of vis) {
            if (val == 0) {
                return false;
            }
        }
        return true;
    }
}
