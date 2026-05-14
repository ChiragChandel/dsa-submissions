class Solution {
    characterReplacement(s, k) {
        let l = 0;
        let freqMap = new Map();
        let mostFreq = 0, ans = 0;

        for(let r = 0; r < s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) || 0)  + 1);
            mostFreq = Math.max(mostFreq, freqMap.get(s[r]));

            if((r - l + 1) - mostFreq > k){
                freqMap.set(s[l], freqMap.get(s[l]) - 1);
                l++;
            } 
            ans = Math.max(ans, r - l + 1);
        }
        return ans;
    }
}
