class Solution {
    canCompleteCircuit(gas, cost) {
        let totalGas = 0, totalCost = 0;
        for(let i = 0; i < gas.length; i++){
            totalGas += gas[i];
            totalCost += cost[i];
        }

        if(totalCost > totalGas) return -1;
        
        let currGas = 0, start = 0;
        for(let i = 0; i < gas.length; i++){
            currGas +=  gas[i] - cost[i];
            if(currGas < 0){
                start = i + 1;  
                currGas = 0;
                continue;
            }
        }
        return start;
    }
}
