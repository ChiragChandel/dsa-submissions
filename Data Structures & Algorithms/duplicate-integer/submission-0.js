class Solution {
    hasDuplicate(nums) {
        let hash = new Set();

        for(let val of nums){
            if(!hash.has(val)){
                hash.add(val);
            }
            else{
                return true;
            }
        }
        return false;
    }
}
