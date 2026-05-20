class Solution {
    numIslands(grid) {
        let n = grid.length;
        let m = grid[0].length;

        let visArr = Array.from({ length: n }, () => Array(m).fill(0));

        let bfsCount = 0;

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < m; col++) {

                if (grid[row][col] === "1" && !visArr[row][col]) {

                    bfsCount++;

                    this.bfs(row, col, grid, visArr, n, m);
                }
            }
        }

        return bfsCount;
    }

    bfs(stRow, stCol, grid, visArr, n, m) {

        let queue = [];

        queue.push([stRow, stCol]);

        visArr[stRow][stCol] = 1;

        let dirArr = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];

        while (queue.length) {

            let [row, col] = queue.shift();

            for (let i = 0; i < dirArr.length; i++) {

                let currRow = row + dirArr[i][0];
                let currCol = col + dirArr[i][1];

                if (
                    currRow >= 0 &&
                    currRow < n &&
                    currCol >= 0 &&
                    currCol < m &&
                    grid[currRow][currCol] === "1" &&
                    !visArr[currRow][currCol]
                ) {

                    queue.push([currRow, currCol]);

                    visArr[currRow][currCol] = 1;
                }
            }
        }
    }
}