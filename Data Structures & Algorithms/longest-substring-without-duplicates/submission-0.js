class Solution {
    lengthOfLongestSubstring(s) {
        let locMap = new Map();
        if(s.length == 0) return 0;

        let l = 0, ans = 0;
        for(let r = 0; r < s.length; r++){
            if(locMap.has(s[r])){
                let prev = locMap.get(s[r]);
                l = Math.max(l, prev + 1);

            }
            locMap.set(s[r], r);
            ans = Math.max(ans, r - l + 1);
        }
        return ans;
    }
}
