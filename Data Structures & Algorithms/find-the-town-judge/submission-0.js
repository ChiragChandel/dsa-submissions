class Solution {
    findJudge(n, trust) {
        let inDegree = Array(n).fill(0);
    let outDegree = Array(n).fill(0);

    for(let [x,y] of trust){
        outDegree[x-1]++;
        inDegree[y-1]++;
    }

    for(let i = 0; i < inDegree.length; i++){
        if(outDegree[i] == 0 && inDegree[i] == n - 1){
            return i + 1;
        }
    }
    return -1;
    }
}
