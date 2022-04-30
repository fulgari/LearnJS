function findMost(str) {
    let map = {}
    let arr = str.split('')
    arr.forEach(e=> {
        if(!map[e]) {
            map[e] = 0
        }
    })
    let count = 0
    let last = arr[0]
    for(let i=0; i<arr.length; i++) {
        let cur = arr[i]
        
        ++count

        if(map[cur]) {
            map[cur] = Math.max(count, map[cur])
        } else {

        }
    }
}