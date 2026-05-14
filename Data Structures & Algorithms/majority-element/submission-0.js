class Solution {
    majorityElement(nums) {
        let count = 0;
        let candidate = null;

        for(let val of nums){
            if(count == 0){
                candidate = val;
            }
            if(val !== candidate){
                count--;
            }
            if(val == candidate){
                count++

            }
        }
        return candidate;
    }
}
