class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let n = board.length;
        let m = board[0].length;

        let dirArr = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1]
        ];

        // Left and right columns
        for (let row = 0; row < n; row++) {

            if (board[row][0] === "O") {
                bfs(row, 0);
            }

            if (board[row][m - 1] === "O") {
                bfs(row, m - 1);
            }
        }

        // Top and bottom rows
        for (let col = 0; col < m; col++) {

            if (board[0][col] === "O") {
                bfs(0, col);
            }

            if (board[n - 1][col] === "O") {
                bfs(n - 1, col);
            }
        }

        // Convert remaining O -> X and T -> O
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {

                if (board[i][j] === "O") {
                    board[i][j] = "X";
                }
                else if (board[i][j] === "T") {
                    board[i][j] = "O";
                }
            }
        }

        function bfs(i, j) {

            let queue = [];
            queue.push([i, j]);

            board[i][j] = "T";

            while (queue.length) {

                let [row, col] = queue.shift();

                for (let k = 0; k < 4; k++) {

                    let newRow = row + dirArr[k][0];
                    let newCol = col + dirArr[k][1];

                    if (
                        newRow >= 0 &&
                        newRow < n &&
                        newCol >= 0 &&
                        newCol < m &&
                        board[newRow][newCol] === "O"
                    ) {
                        board[newRow][newCol] = "T";
                        queue.push([newRow, newCol]);
                    }
                }
            }
        }
    }
}