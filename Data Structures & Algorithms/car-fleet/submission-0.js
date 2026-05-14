class Solution {
    carFleet(target, position, speed) {
        let n = speed.length;
        let fleet = 1;
        let cord = position.map((p, i) => [p, speed[i]]);
        cord = cord.sort((a,b) => b[0] - a[0]);
        let stack = [];
        stack.push(( target- cord[0][0] ) / cord[0][1]);

        for(let i = 1; i < n; i++){
            let val = ( target- cord[i][0] ) / cord[i][1];            
            if(val <= stack[stack.length - 1]){
                continue;
            }
            else{
                stack.push(val);
                fleet++;
            }
        }
        return fleet;
    }
}