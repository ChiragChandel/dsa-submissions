class Solution {
    trap(height) {
        let lMax = Array.from({ length: height.length }, () => 0);
    let rMax = Array.from({ length: height.length }, () => 0);

    let leftMax = 0
    let rightMax = 0

    for (let i = 0; i < height.length; i++) {
        let j = height.length - i - 1;
        
        
        leftMax = Math.max(leftMax, height[i]);  
        lMax[i] = leftMax;      

       
        rightMax = Math.max(rightMax, height[j]);
        rMax[j] = rightMax;
        
    }
    let currSum = 0;
    for(let i = 1; i < height.length - 1; i++){
        currSum += Math.min(lMax[i], rMax[i]) - height[i];
    }
    return currSum;
    }
}
