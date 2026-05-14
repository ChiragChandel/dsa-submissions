class Solution {
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        let newSet = new Set(nums);
        let longest = 0;

        for (let num of newSet) {
            if (!newSet.has(num - 1)) {
                let curr = num;
                let streak = 1;

                while (newSet.has(curr + 1)) {
                    curr++;
                    streak++
                }
                longest = Math.max(longest, streak);
            }
        }
        return longest;
    }
}
