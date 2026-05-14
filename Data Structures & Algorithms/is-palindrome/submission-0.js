class Solution {
    isPalindrome(s) {
        let str = "";

        for(let ch of s){
            if((ch >= 'a') && (ch <= 'z') || (ch >= 'A') && (ch <= 'Z') || (ch >= '0') && (ch <= '9')){
                str += ch.toLowerCase();
            }
        }
        let l = 0, r = str.length - 1;
        while(l <= r){
            if(str[l] !== str[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
