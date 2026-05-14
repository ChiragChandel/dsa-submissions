class Solution {
    validPalindrome(s) {
        let l = 0, r = s.length - 1;

        while(l < r){
            if(s[l] == s[r]){
                l++;
                r--;
            }
            else{
                return this.isPalindrome(s, l + 1, r) || this.isPalindrome(s, l, r - 1);
            }
        }
        return true;
    }

    isPalindrome(s, l, r){
        while(l < r){
            if(s[l] == s[r]){
                l++;
                r--;
            }
            else{
                return false;
            }
        }
        return true;
    }
}
