class Solution {
    minWindow(s, t) {
        let freqMapT = new Map();

        for(let ch of t){
            freqMapT.set(ch, (freqMapT.get(ch) || 0) + 1);
        }
        let i = -1, j = -1;
        let mcnt = 0, dmcnt = t.length;
        let tempMap = new Map();
        let ans = "";
        while(true){
            let f1 = true, f2 = true;
            while(i < s.length && mcnt < dmcnt){
                i++;
                tempMap.set(s[i], (tempMap.get(s[i]) || 0) + 1);
                if(tempMap.get(s[i]) <= freqMapT.get(s[i]) || 0){
                    mcnt++;
                }
                f1 = false;
            }
            
            while(j < i && mcnt == dmcnt){
                let potAns = s.substring(j+1, i+1);
                if(ans.length == 0 || potAns.length < ans.length){
                    ans = potAns;
                } 
                j++;
                if(tempMap.get(s[j]) == 1){
                    tempMap.delete(s[j]);
                }
                else{
                    tempMap.set(s[j], tempMap.get(s[j]) - 1);
                }
                if((tempMap.get(s[j]) || 0) < (freqMapT.get(s[j]) || 0)){
                    mcnt--;
                }
                f2 = false;
            }
            if(f1 && f2) break;
        }
        return ans;
    }
}
