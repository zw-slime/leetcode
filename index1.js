// https://leetcode-cn.com/problems/longest-word-in-dictionary/
// 词典中最长的单词

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    if(!words || words.length <=0 ) {
        return ''
    }
    const _words = words.sort((a,b)=> {
        if(a.length === b.length) {
            return b.localeCompare(a)
        } else {
            return a.length -  b.length
        }

    })
    let last = ''
    const wordSet = new Set()
    wordSet.add(last)
    for(let w of _words) {
        if(wordSet.has(w.slice(0,w.length-1))){
            wordSet.add(w)
            last=w;
        }

    }


    return last
};


var longestWord1 = function(words) {
    const s = new Set()
    for(const word of words)
        s.add(word)
    let ans = ""
    out:
        for(const word of words) {
            console.warn(word)
            for(let i = 1; i < word.length; i++) {
                if(!s.has(word.substring(0, i)))  {
                    continue out
                }
                console.warn(i,word,word.substring(0, i))
                if(word.length > ans.length || (word.length == ans.length && word.localeCompare(ans) < 0)) {
                    ans = word
                }

                console.warn(ans)

            }

        }
    return ans
};


console.warn(longestWord1(["a", "banana", "app", "appl", "ap", "apply", "apple"]))
