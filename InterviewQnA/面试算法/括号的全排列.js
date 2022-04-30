// 输出n对括号的全排列
function permute(n) {
    if(n<=0) {
        return []
    }
    let res = []
    let dfs = function(l, r, str) {
        if(l==n && r==n) {
            res.push(str)
            return
        }
        if(r>l) {
            return
        }
        if(l<n) {
            dfs(l+1, r, str+"(")
        }
        if(r<n) {
            dfs(l, r+1, str+")")
        }
    }
    dfs(0, 0, "")
    return res
}

console.log(permute(3))