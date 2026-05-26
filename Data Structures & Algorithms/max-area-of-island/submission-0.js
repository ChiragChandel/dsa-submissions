class Solution {

    maxAreaOfIsland(grid) {

        let n = grid.length;
        let m = grid[0].length;

        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {

                if (grid[i][j] === 1) {

                    let area = bfs(i, j);

                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;

        function bfs(row, col) {

            let queue = [];
            queue.push([row, col]);

            // mark visited
            grid[row][col] = 0;

            let currArea = 1;

            let directions = [
                [-1, 0],
                [0, 1],
                [1, 0],
                [0, -1]
            ];

            while (queue.length) {

                let [row, col] = queue.shift();

                for (let i = 0; i < directions.length; i++) {

                    let newRow = row + directions[i][0];
                    let newCol = col + directions[i][1];

                    if (
                        newRow >= 0 &&
                        newRow < n &&
                        newCol >= 0 &&
                        newCol < m &&
                        grid[newRow][newCol] === 1
                    ) {

                        currArea++;

                        queue.push([newRow, newCol]);

                        // mark visited
                        grid[newRow][newCol] = 0;
                    }
                }
            }

            return currArea;
        }
    }
}