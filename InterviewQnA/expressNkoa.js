// Koa compose
async function fn1(next) {
    console.log("1")
    await next()
}

async function fn2(next) {
    console.log("2")
    await next()
    console.log("4")
}

async function fn3(next) {
    console.log("3")
    return next()
}

function compose(arr) {
    return function() { // 返回的是一个函数，并用闭包和外部的环境隔绝
        let dispatch = function(i) { // dispatch 函数用于发配包含下一步自身递归的 Promise 对象
            let cur = arr[i] //拿到第 i 个函数，用于 resolve 并发配 Promise
            if(!cur) {
                return Promise.resolve() // 如 cur 为 undefined， 则终结发配，直接 resolve 回去给所有的 Promise
            }
            return Promise.resolve(
                cur( // 用于计算值的函数
                    function next() {
                        return dispatch(i+1) // 返回一个函数，发配到下一个 Promise
                    }
                )
            )
        }
        return dispatch(0) // 开始发配

    }
}

let fn = compose([fn1, fn2, fn3]);
fn();