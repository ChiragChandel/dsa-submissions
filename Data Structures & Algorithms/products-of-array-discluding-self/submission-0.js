class Solution {   
    productExceptSelf(nums) {
        let n = nums.length;
        let prefProd = Array(n).fill(1);
        let suffProd = Array(n).fill(1);

        for(let i = 1; i < n; i++){
            prefProd[i] = prefProd[i-1] * nums[i-1];
            suffProd[n-i-1] = suffProd[n-i] * nums[n-i];
        }
        let res = Array(n).fill(0);
        for(let i = 0; i < prefProd.length; i++){
            res[i] = prefProd[i] * suffProd[i];
        }
        return res;
    }
}
