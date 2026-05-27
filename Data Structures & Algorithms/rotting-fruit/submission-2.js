class Solution {
    orangesRotting(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let dirArr = [[-1,0], [0, 1,], [1,0], [0,-1]];
        let queue = [];
        let min = 0;

        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if(grid[i][j] == 2){
                    queue.push([i,j,0]);
                }
            }
        }

        while(queue.length){
            let [r,c,t] = queue.shift();
            min = t;
            for(let i = 0; i < 4; i++){
                let newRow = r + dirArr[i][0];
                let newCol = c + dirArr[i][1];
                if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && grid[newRow][newCol] == 1){
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol, t+1]);
                }
            }
        }

        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if(grid[i][j] == 1){
                    return -1;
                }
            }
        }
        return min;
    }
}
