// 深浅拷贝.js

function shallowCopy(obj) {
    if(typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

function deepCopy(obj) {
    if(typeof obj !== 'object') return
    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key] //深拷贝只需要改这一句代码就行啦！~
        }
    }
    return newObj
}

// 又有 JSON 深拷贝
function dc(obj) {
    return JSON.parse(JSON.stringify(obj))
}

let obj = [{"a":"yell", "x":{"y":"z"}}]
let cp = shallowCopy(obj)
let dcp = deepCopy(obj)
console.log(cp) 
console.log(dcp) 
obj[0].x.y = "100"
console.log(cp)
console.log(dcp)

