class Solution {
    islandsAndTreasure(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let queue = [];
        const INF = 2147483647;
        let dirArr = [[-1, 0], [0, 1], [1, 0], [0, -1]];


        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                if(grid[i][j] == 0){
                    queue.push([i,j,0]);
                }
            }
        }
        while(queue.length){
            let [r, c, lev] = queue.shift();
            
            for(let i = 0; i < dirArr.length; i++){
                let newRow = r + dirArr[i][0];
                let newCol = c + dirArr[i][1];

                if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && grid[newRow][newCol] == INF){
                    grid[newRow][newCol] = lev + 1;
                    queue.push([newRow, newCol, lev + 1]);
                }
            }

        }
        return grid;
    }
   

    
}
