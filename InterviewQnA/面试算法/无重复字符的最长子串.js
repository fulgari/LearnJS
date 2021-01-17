/**
 * 3. 无重复字符的最长子串 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s 
 */
let lengthOfLongestSubstring = function(s) {
    let arr = [], ans = 0
    for(let i=0; i<s.length; i++) {
        let index = arr.indexOf(s[i])
        if(index != -1) {
            arr.splice(0, index+1)
        }
        arr.push(s[i])
        ans = Math.max(arr.length, ans)
    }
    return ans
}

console.log(lengthOfLongestSubstring("abcabcbb"))

let solve = function(s) {
    let len = s.length
    for(let i=len/2; i>=1; i--) {
        for(let j=0; j<=len-2*i; j++) {
            let flag = judge(s, j, i)
            if(flag) {
                return 2*i
            }
        }
    }
    return 0
}

let judge = function(s, start, len) {
    for(let i=0; i<len; i++) {
        if(s[start+i] != s[start+i+len]) {
            return false
        }
    }
    return true
}

console.log(solve("abcabcabc"))