class Solution {
    dailyTemperatures(temperatures) {
        let arr = [...temperatures];
        let monStack = [];
        let res = Array(arr.length).fill(0);

        monStack.push(0);
        for(let i = 1; i < arr.length; i++){
            //jo mera curr ele hai, woh kya stack ke top se bada hai?
            while(arr[i] > arr[monStack[monStack.length - 1]]){
                let num = monStack.pop();
                res[num] = i - num;
            }
            monStack.push(i);
        }
        return res;
    }
}
