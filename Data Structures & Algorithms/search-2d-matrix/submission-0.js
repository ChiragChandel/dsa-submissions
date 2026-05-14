class Solution {
    searchMatrix(matrix, target) {
        let rows = matrix.length, cols = matrix[0].length;
        let l = 0, r = matrix.length - 1;

        while(l <= r){
                let mid = Math.floor((l + r) / 2);
                if(matrix[mid][0] <= target && target <= matrix[mid][cols - 1]){
                    return this.binSearch(matrix[mid], target);
                }
                else if(target < matrix[mid][0]){
                    r = mid - 1;
                }
                else{
                    l = mid + 1;
                }
        }   
            return false;
    }
    binSearch(arr, target){
    let l = 0, r = arr.length - 1;
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(arr[mid] == target) return true;
        if(arr[mid] < target){
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }
    return false;
}
}
