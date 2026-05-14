class Solution {
    isValid(s) {
        let stack = [];

        for (let ch of s) {
            if (ch === '(' || ch === '[' || ch === '{') {
                stack.push(ch);
            } else {
                if (stack.length === 0) return false;

                let top = stack[stack.length - 1];

                if (
                    (ch === ')' && top === '(') ||
                    (ch === ']' && top === '[') ||
                    (ch === '}' && top === '{')
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}