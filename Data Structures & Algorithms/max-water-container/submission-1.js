class Solution {
    maxArea(heights) {
        let maxArea = 0;
        let currArea;
        let l = 0, r = heights.length - 1;

        while(l < r){
            currArea = (r - l) * Math.min(heights[l], heights[r]);
            maxArea = Math.max(maxArea, currArea);
            if(heights[l] < heights[r]){
                l++;
            }
            else{
                r--;
            }
        }
        return maxArea;  
    }
}
