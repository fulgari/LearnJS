// 阻塞页面的问题
/**
 * 1. css样式文件的加载 **会阻塞** 脚本的执行
 * 2. iframe会阻塞主页面的 load 事件
 * 3. <audio> <img> 中子源的下载 **不会** 阻塞页面解析
 * 4. 页面文档完全加载并解析完毕之后会触发 DOMContentLoaded 事件
 */

// 跨域相关
/**
 * 1. 当前域的 cookie 可以通过 js 在当前域下获取 (这是错的！ cookie 中设置 httponly 之后 js 脚本将无法获取到 cookie)
 * 2. JSONP 是 XMLHttpRequest 中的一种 (这是错的！ JSONP 是一种跨域手段，它不使用 XHR 而是使用了<script>标签来使用的)
 * 3. 同源策略是浏览器的安全策略
 * 4. localStorage API 不支持设置过期时间
 */

 // js 相关
 /**
  * 1. requestAnimationFrame(foo) 确保浏览器在下一次重绘之前调用 foo
  * 2. 在 addEventListener 的处理方法中使用 e.preventDefault() 可以阻止冒泡（错的！应该是阻止默认行为，阻止冒泡是stopPropagation）
  * 3. 把 <script> 标签引入放在文档末尾可以确保脚本下载和执行均在文档解析完成后发生。
  * 4. 多个 <script> 标签使用 defer 属性引入脚本时，可以确保脚本的执行是 **按照其被引入的顺序的**（对的，defer 只是延后但顺序不变，而 async 则不一定按顺序）
  */

// 

// 宏任务微任务，错了
setTimeout(function() {
console.log(1);
},0)
new Promise(function execulor(resolve){
    console.log(2)
for(var i = 0;i<10000;i+=1){
i ==9999 && resolve()
}
console.log(3)
}).then(function(){
console.log(4)
})
console.log(5)
/**
 * 2541
 * 先执行同步代码宏任务输出25，再执行第一轮异步微任务代码输出4，最后执行第一轮宏任务代码输出1。由于3在执行到之前已经resolve了，因此不会输出。
 * ******上面的错了 TAT ， 正解： 23541 ***
 * 
 * resolve() 不是 return！！！！
 * 3也是同步输出的，原因是resolve() 和 reject() 内部实际上是由一个类似 setTimeout 的操作去等所有的 resolveList/rejectList 的回调函数都用 data 执行一遍。因此 resolve()/reject() 是异步的宏任务！
 * */

 
 /**
  * 写函数 paddingNum(987654321.12) output: '987,654,321.12'
  */

function paddingNum(num) {
    let str = '' + num
    let arr = str.split('.')
    let temp = arr[0].split('')
    for(let i=arr[0].length-1; i>0; i-=3) {
        if(i==arr[0].length-1) continue
        temp.splice(i, 0, ',')
    }
    return temp.join('')+'.'+arr[1]
}

console.log(paddingNum(987654.323))



/**
 * productExceptSelf([1,2,3,4])  => output: [24, 12, 8, 6]
 */

function productExceptSelf(arr) {
    return arr.map((cur, index, arr) => {
        let newArr = arr.slice()
        newArr.splice(index, 1)
        return newArr.reduce((a,b)=>a*b)
    })
}

console.log(productExceptSelf([1,2,3,4]))


/**
 * 字符串倒序

输入描述:
输入一个字符串。包含空格和可见字符。长度<=100000。 

输出描述:
输出一个字符串，表示反转后结果。

输入例子1:
the	sky	is  blue!

输出例子1:
blue! is sky the
 */


function rev(str) {
    if(typeof(str) !== 'string') return str
    str = str.replace(/\s+/g, ' ')
    let arr = str.split(' ')
    return arr.reverse().join(' ')
}

console.log(rev('the	sky	is												blue!'))

