class Solution {
    isValidSudoku(board) {
        let row = Array.from({length: 9}, () => new Set());
        let col = Array.from({length: 9}, () => new Set());
        let boxes = Array.from({length: 9}, () => new Set());

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                let val = board[r][c];
                if(val == ".") continue;

                let boxId = Math.floor(r/3) * 3 + Math.floor(c/3);

                if(row[r].has(val) || col[c].has(val) || boxes[boxId].has(val)){
                    return false;
                }
                row[r].add(val);
                col[c].add(val);
                boxes[boxId].add(val);
            }
        }
        return true;
    }
}
