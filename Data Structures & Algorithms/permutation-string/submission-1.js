class Solution {
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

    let freq1 = Array(26).fill(0);
    let freq2 = Array(26).fill(0);

    for(let i = 0; i < s1.length; i++){
        freq1[s1[i].charCodeAt(0) - 97]++;
    }
    
    let l = 0;

    for(let r = 0; r < s2.length; r++){
        freq2[s2[r].charCodeAt(0) - 97]++;

        if(r - l + 1 > s1.length){
            freq2[s2[l].charCodeAt(0) - 97]--;
            l++;
        }
        if(arraysEqual(freq1, freq2)) return true;
    }
    return false; 
    }
}
function arraysEqual(a,b){
    for(let i = 0; i < 26; i++){
        if(a[i] !== b[i]) return false;
    }
    return true;
}
