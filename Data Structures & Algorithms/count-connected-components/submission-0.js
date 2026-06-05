class Solution {
    countComponents(n, edges) {
        let adj = Array(n).fill(0).map(() => []);
        let vis = Array(n).fill(0);
        let comp = 0;

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        for (let i = 0; i < vis.length; i++) {
            if (vis[i] == 0) {
                comp++;
                bfs(i);
            }
        }
        return comp;

        function bfs(start) {
            let queue = [];
            queue.push(start);
            vis[start] = 1;

            while (queue.length) {
                let node = queue.shift();

                for (let i = 0; i < adj[node].length; i++) {
                    if (vis[adj[node][i]] == 0) {
                        vis[adj[node][i]] = 1;
                        queue.push(adj[node][i]);
                    }
                }
            }
        }
    }
}
