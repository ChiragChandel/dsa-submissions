class Solution {
    evalRPN(tokens) {
        let st = [];
        for(let val of tokens){
            if(!isNaN(val)){
                st.push(Number(val));
            }
            else{
                let opr2 = st.pop();
                let opr1 = st.pop();
                let res =  this.solve(opr1, opr2, val);
                st.push(res);
            }
        }
        return st[st.length - 1];
    }
    solve(a, b, work){
        if(work == "+"){
            return a + b;
        }
        else if(work == '-'){
            return a - b;
        }
        else if(work == '*'){
            return a * b;
        }
        else{
            return Math.trunc(a / b);
        }
    }
}
