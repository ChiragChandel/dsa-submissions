class Solution {
    isAlienSorted(words, order) {
        // create character ranking map
        const rank = {};

        for (let i = 0; i < order.length; i++) {
            rank[order[i]] = i;
        }

        // compare adjacent words
        for (let i = 0; i < words.length - 1; i++) {
            if (!this.inCorrectOrder(words[i], words[i + 1], rank)) {
                return false;
            }
        }

        return true;
    }

    inCorrectOrder(word1, word2, rank) {
        let len = Math.min(word1.length, word2.length);

        for (let i = 0; i < len; i++) {
            let c1 = word1[i];
            let c2 = word2[i];

            // characters differ
            if (c1 !== c2) {
                return rank[c1] < rank[c2];
            }
        }

        // prefix case
        return word1.length <= word2.length;
    }
}