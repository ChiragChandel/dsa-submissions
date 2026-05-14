class Solution {
    search(nums, target) {
        let n = nums.length;
        let l = 0, r = nums.length - 1;

        while(l < r){
            let mid = Math.floor((l + r) / 2);
            if(nums[mid] > nums[r]){
                l = mid + 1;
            }
            else{
                r = mid;
            }
        }
        let pivot = l;
        if(nums[pivot] <= target && target <= nums[n - 1]){
            return this.binSearch(pivot, n - 1, nums, target);
        }
        else{
            return this.binSearch(0, pivot - 1, nums, target);
        }
    }
    binSearch(left, right, nums, target){
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] == target) return mid;
            if(nums[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
        return -1;
    }
}
