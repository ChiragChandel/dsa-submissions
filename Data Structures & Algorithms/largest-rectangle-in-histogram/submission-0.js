class Solution {
    largestRectangleArea(heights) {
        let n = heights.length;
        let lb = Array(n);
        lb[0] = -1;
        let st = [];
        st.push(0);
        
        for(let i = 1; i < n; i++){
            while(st.length > 0 && heights[i] <= heights[st[st.length - 1]]){
                st.pop();
            }
            if(st.length == 0){
                lb[i] = -1;
            }
            else{
                lb[i] = st[st.length - 1]; 
            }   
            st.push(i);         
        }
        st.length = 0;
        let rb = Array(n);
        rb[n - 1] = n;
        st.push(n - 1);

        for(let i = n - 2; i >= 0; i--){
            while(st.length > 0 && heights[i] <= heights[st[st.length - 1]]){
                st.pop();
            }
            if(st.length == 0){
                rb[i] = n;
            }
            else{
                rb[i] = st[st.length - 1];
            }
            st.push(i);
        }
        let maxArea = -Infinity;
        for(let i = 0; i < n; i++){
            maxArea = Math.max(maxArea, heights[i] * (rb[i] - lb[i] - 1));
        }
        return maxArea;
    }
}
