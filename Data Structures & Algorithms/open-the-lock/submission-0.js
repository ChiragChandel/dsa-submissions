class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let deadSet = new Set(deadends);

    if(deadSet.has("0000")) return -1;

    let queue = [];
    queue.push(["0000", 0]);
    let vis = new Set();
    vis.add("0000");

    while(queue.length){
        let [lock, step] = queue.shift();

        if(lock == target) return step;

        for(let i = 0; i < 4; i++){
            let digit = Number(lock[i]);

            //rotate right (increasing)
            let up = (digit + 1) % 10;

            //rotate left (decreasing)
            let down = (digit - 1 + 10) % 10;

            let upLock = lock.slice(0, i) + up + lock.slice(i+1);

            let downLock = lock.slice(0, i) + down + lock.slice(i+1);

            if(!deadSet.has(upLock) && !vis.has(upLock)){
                queue.push([upLock, step + 1]);
                vis.add(upLock);
            }

            if(!deadSet.has(downLock) && !vis.has(downLock)){
                queue.push([downLock, step + 1]);
                vis.add(downLock);
            }
        }
    }
    return -1;
    }
}
