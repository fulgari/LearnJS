// 层级遍历.js

function levelOrder( root ) {
    if(!root) return []
    let queue = [root]
    let res = []
    while(queue.length) {
        let temp = []
        let len = queue.length //把queue长度记起来，再在里面循环一整层于temp存起来
        while(len) {
            let cur = queue.shift()
            if(cur.left) {
                queue.push(cur.left)
            }
            if(cur.right) {
                queue.push(cur.right)
            }
            len--
            temp.push(cur.val)
        }
        res.push(temp)
    }
    return res
}