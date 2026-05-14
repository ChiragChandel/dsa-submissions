class MinStack {
    constructor() {
        this.stack = [];
        this.decStack = [];
    }    
    push(val) {
        if (this.decStack.length === 0 || val <= this.decStack[this.decStack.length - 1]) {
            this.decStack.push(val);
        }
        this.stack.push(val);
    }    
    pop() {
        let rem = this.stack.pop();
        if(rem == this.decStack[this.decStack.length - 1]){
            this.decStack.pop();
        }
    }    
    top() {
        return this.stack[this.stack.length - 1];
    }    
    getMin() {
        return this.decStack[this.decStack.length - 1];                
    }
}
