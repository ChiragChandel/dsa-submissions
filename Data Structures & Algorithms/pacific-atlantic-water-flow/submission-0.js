class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let n = heights.length;
        let m = heights[0].length;

        let directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        let pacificVisited = Array.from(
            { length: n },
            () => Array(m).fill(false)
        );

        let atlanticVisited = Array.from(
            { length: n },
            () => Array(m).fill(false)
        );

        let pacificQueue = [];
        let atlanticQueue = [];

        // PACIFIC boundaries
        // top row
        for(let col = 0; col < m; col++) {
            pacificQueue.push([0, col]);
            pacificVisited[0][col] = true;
        }

        // left column
        for(let row = 0; row < n; row++) {
            pacificQueue.push([row, 0]);
            pacificVisited[row][0] = true;
        }

        // ATLANTIC boundaries
        // bottom row
        for(let col = 0; col < m; col++) {
            atlanticQueue.push([n - 1, col]);
            atlanticVisited[n - 1][col] = true;
        }

        // right column
        for(let row = 0; row < n; row++) {
            atlanticQueue.push([row, m - 1]);
            atlanticVisited[row][m - 1] = true;
        }

        bfs(pacificQueue, pacificVisited);
        bfs(atlanticQueue, atlanticVisited);

        let result = [];

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {

                if(pacificVisited[i][j] && atlanticVisited[i][j]) {
                    result.push([i, j]);
                }

            }
        }

        return result;

        function bfs(queue, visited) {

            while(queue.length) {

                let [row, col] = queue.shift();

                for(let i = 0; i < 4; i++) {

                    let newRow = row + directions[i][0];
                    let newCol = col + directions[i][1];

                    if(
                        newRow >= 0 &&
                        newRow < n &&
                        newCol >= 0 &&
                        newCol < m &&
                        !visited[newRow][newCol] &&
                        heights[newRow][newCol] >= heights[row][col]
                    ) {

                        visited[newRow][newCol] = true;

                        queue.push([newRow, newCol]);
                    }
                }
            }
        }
    }
}