class Solution {
    encode(strs) {
        let res = "";
        for(let str of strs){
            res += str.length + "#" + str;
        }
        return res;        
    }    
    decode(str) {
        let i = 0;
        let res = [];

        while(i < str.length){
            let numStr = "";
            while(i < str.length && str[i] >= '0' && str[i] <= '9'){
                numStr += str[i];
                i++;
            }
            let count = parseInt(numStr);
            i++;
            let word = str.slice(i, i + count);
            res.push(word);

            i += count;
        }
        return res;

    }
}
