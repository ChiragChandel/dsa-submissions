class Solution {    
    threeSum(nums) { 
        nums = nums.sort((a,b) => a-b);
        let res = [];
        
        for(let i = 0; i < nums.length - 2; i++){
            if(i > 0 && nums[i] == nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;
            let target = -nums[i];

            while(l < r){
                let currSum = nums[l] + nums[r];
                if(l < r && currSum == target){
                    res.push([nums[i], nums[l], nums[r]]);
                    while(l < r && nums[l] == nums[l + 1]){
                        l++;
                    }
                    while(l < r && nums[r] == nums[r - 1]){
                        r--;
                    }
                    l++;
                    r--;
                }
                else if(currSum < target){
                    l++;
                }
                else{
                    r--;
                }
            }
        }
        return res;    
    };
}

