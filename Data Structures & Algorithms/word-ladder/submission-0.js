class Solution {
    ladderLength(beginWord, endWord, wordList) {
        let wordSet = new Set(wordList);

        let q = [[beginWord, 1]];

        let vis = new Set();
        vis.add(beginWord);

        while (q.length) {
            let [word, steps] = q.shift();

            if (word == endWord) return steps;

            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    let char = String.fromCharCode(c);

                    let wordArr = word.split("");
                    wordArr[i] = char;
                    let newWord = wordArr.join("");

                    if (wordSet.has(newWord) && !vis.has(newWord)) {
                        vis.add(newWord);
                        q.push([newWord, steps + 1]);
                    }
                }
            }
        }
        return 0;
    }
}
