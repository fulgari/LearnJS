/**
 * 输入：字符串 "dksffjljglkklsdkf"
 * 输出：数组 ['f:2','k:2']
 */
function findLongest(str) {
    let res = []
    let arr = str.split("")
    let dp = [1]
    let max = 0
    for(let i=1; i<str.length; i++) {
        if(arr[i] == arr[i-1]) {
            dp[i] = dp[i-1] + 1
        } else {
            dp[i] = 1
        }
        if(dp[i] >= max) {
            max = dp[i]
            res.push(str[i]+':'+max)
        }
    }
    res = res.filter(e => {
        return e.replace(/^\w+:/, "") == max
    })
    return res
}

console.log(findLongest("dksffjljglkklsdkff"))