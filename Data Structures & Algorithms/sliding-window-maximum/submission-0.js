class Solution {
    maxSlidingWindow(nums, k) {
        let res = [], deq = [];

        for(let i = 0; i < nums.length; i++){
            //check window size
            if(deq.length && deq[0] <= i - k){
                deq.shift();
            }
            while(deq.length && nums[deq[deq.length - 1]] < nums[i]){
                deq.pop();
            }
            deq.push(i);
            //for every window, store in res
            if(i >= k - 1){
                res.push(nums[deq[0]]);
            }
        }
        return res;
    }
}
